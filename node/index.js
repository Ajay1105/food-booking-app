import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import multer from 'multer';
import ejs from 'ejs';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
dotenv.config();

const whitelist = ["http://localhost:3000","http://localhost:5000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

try {
  mongoose.connect(
    process.env.URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose is connected")
  );
} catch (e) {
  console.log("could not connect");
}
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });

const foodSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  price: {
    type: Number,
    required : true
  },
  description: {
    Type: String
  },
  img:
    {
        data: Buffer,
        contentType: String
    }

});

const Food = new mongoose.model("Food", foodSchema);

app.get('/', (req, res) => {
  Food.find({}, (err, items) => {
      if (err) {
          console.log(err);
          res.status(500).send('An error occurred', err);
      }
      else {
        //  res.render('imagesPage', { items: items });
        console.log("called");
        res.send(items);
      }
  });
});

app.post('/', upload.single('image'), (req, res, next) => {
  
  var obj = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.des,
      img: {
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
          contentType: 'image/png'
      }
  }
  Food.create(obj, (err, item) => {
      if (err) {
          console.log(err);
      }
      else {
          item.save();
          res.redirect('/');
          next();
      }
  });
 
});












app.listen(5000, function () {
  console.log("server at port 5000");
});
