import React, {useRef , useState } from "react";
import {View  , Image , Platform, Text , TouchableOpacity} from 'react-native'
import ImageCropPicker from "react-native-image-crop-picker";
import common from "../utils/common";
const cameraImg  = require('../resoucrce/images/icon_camera.png')
const  CameraUI  =  () => {
    const [img , setImg] =  useState(null)
    var data = new FormData()
    // data.append(1, 'input')
    data.append('usename' , 'Chris')
    console.log(data , "from");
     const chooseFromCamera = () => {
         console.warn('chooseFromCamera')
         ImageCropPicker.openCamera({
             width : 300,
             height  : 400 ,
             cropping  : true,
         }).then(img =>  {
             console.log(img , "ddd");
             setImg(img.path)
             common.postApi(img)
         })
     }
    return (
         <View>
           {
               img== null ? (
                <Image source={cameraImg}
                style={{height : 200  , width :  '80%'  , alignSelf : 'center'}}
             />
               ):(
                <Image source={{uri : img}}
            
                style={{height : 250  , width : '100%' , alignSelf : 'center'}}
             />
               )
           }
             <TouchableOpacity
             style={{backgroundColor:'red' , padding : 10 , marginTop : 23 , alignItems :'center',justifyContent :'center'}}
             onPress={chooseFromCamera}
             >
              <Text style={{color :"white" , fontSize : 23}}>Choose From  Camera</Text>
             </TouchableOpacity>
         </View>
    )
}
export default CameraUI