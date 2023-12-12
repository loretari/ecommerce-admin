import React, {useState} from "react";
import "./newProduct.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import {useDispatch} from "react-redux";


export default function NewProduct () {
   const [product, setProduct] = useState({});
   const [img, setImg] = useState(null);
   const [cat, setCat] = useState([]);
   const dispatch = useDispatch();

   const handleChange = (e) => {
       setProduct(prev => {
           return {...prev, [e.target.name]:e.target.value}
       })
   }

   const handleCategories = (e) => {
       // take the category as an array
       setCat(e.target.value.split(','))
   }
   console.log(product);

const handleClick = (e) => {
    e.preventDefault()
//    give the image the unique name
    const imageName = new Date().getTime() + img.name
    const storage = getStorage(app)
    const StorageRef = ref(storage, imageName);
    const uploadTask = uploadBytesResumable(StorageRef, img);

//    Register three observers:
//    1. 'state-Changed' observer, called any time the state changes
//    2. Error observer, called on failure
//    3. Completion observer, called on failure

    uploadTask.on('state_changed',
        (snapshot) => {
        //  Observe state change events such as progress, pause, and resume
        //    Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred /snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running' :
                console.log('Upload is running');
                break;
            default:
        }
        },
        (error) => {
        // Handle unsuccessful  uploads
        },
        // () => {
        //     // Handle successful uploads on complete
        //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //     //     new product data
        //         console.log({...product, image: downloadURL, categories: cat})
        //         const newProduct = {...product, image:downloadURL, categories: cat};
        //         addProduct(newProduct, dispatch)
        //     });
        // }
        );


}


    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="file" onChange={e => setImg(e.target.files[0])}/>
                </div>  <div className="addProductItem">
                <label>Title:</label>
                <input name="title" type="text" placeholder="" onChange={handleChange} />
            </div>  <div className="addProductItem">
                <label>Description:</label>
                <input name= "description" type="text" placeholder="" onChange={handleChange} />
            </div>
                <div className="addProductItem">
                    <label>Categories</label>
                    <input type="text" placeholder=""  onChange={handleCategories}/>
                </div>
                <div className="addProductItem">
                    <label>Price:</label>
                    <input name= "price" type="number" placeholder="" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <select name="inStock"  onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <button onClick={handleClick} className="addProductButton">Create</button>
            </form>
        </div>
    )
}