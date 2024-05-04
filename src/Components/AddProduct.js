 // Import Bootstrap CSS
 import { useEffect, useState } from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
 import { Navbar, Nav, NavDropdown,Row,Col } from 'react-bootstrap';
 import React from 'react';
 import './cards.css'; 
 import '@fortawesome/fontawesome-free/css/all.css';
 
 
 const AddProduct = () => {
    useEffect(()=>{
        getProducts();
    });

    const getProducts = async()=>{
        let data = await fetch('http://localhost:5000/get-products',{
            method:'get',
            headers:{
                'Content-Type':'application/json'
            },
        })
    }
    const [imageUrls,setImageUrls] = useState([]);
    const [title,setTitle] = useState('');
    const [highlights,setHighlights] = useState('');
    const [category,setCategory] = useState('');
    const [rating, setRating] = useState();
    const [price, setPrice] = useState();
    const [discount_price, setDiscount_price] = useState();
    const [TotalQty, setTotalQty] = useState();
    const [file, setFile] = useState([]);


    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length <= 8) {
            setFile(selectedFiles);
        } else {
            alert('You can upload maximum 8 photos.');
        }
    };

    const upload = async () =>{
        let res = await fetch('http://localhost:5000/get-products',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        });
        res = await res.json()
        setImageUrls(res[9].photos);
        console.log(res);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('highlights', highlights);
        formData.append('category', category);
        formData.append('rating', rating);
        formData.append('price', price);
        formData.append('discount_price', discount_price);
        formData.append('TotalQty', TotalQty);
        for (let i = 0; i < file.length; i++) {
            formData.append('photos', file[i]);
        }
        let ID='6630879e8af4596848530714';
        let result = await fetch('http://localhost:5000/add-product/' + ID,{
            method: 'POST',
            body:formData,
        });
        if(result){
            console.log(result);
        }
    }
    return (
         <div className="">
            <div className="">
                Add Title
            </div>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            <div className="d-flex">Add Photos
            </div>
            <div className="">
                Add Highlights
            </div>
            <input type="text" value={highlights} onChange={(e)=>{setHighlights(e.target.value)}} />
            <div className="d-flex">
                Add Photos
                <input type="file" onChange={handleFileChange} multiple />
            </div>
            <input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} />
            <div className="">
                Add Rating
            </div>
            <input type="number" value={rating} onChange={(e)=>{setRating(e.target.value)}} />
            <div className="">
                Add Price
            </div>
            <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            <div className="">
                Add Discount Price
            </div>
            <input type="number" value={discount_price} onChange={(e)=>{setDiscount_price(e.target.value)}} />
            <div className="">
                Add Total Quantity
            </div>
            <input type="number" value={TotalQty} onChange={(e)=>{setTotalQty(e.target.value)}} />
            <button type='button' onClick={upload}>Upload</button>
            {imageUrls && imageUrls.map((imageUrl, index) => (
                <img key={index} src={`http://localhost:5000/${imageUrl}`} alt={`${index}`} />
            ))}
         </div>
     )
 }
 
 export default AddProduct;
 
 