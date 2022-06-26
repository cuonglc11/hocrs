import React, { useEffect } from "react";
import {View , Text , FlatList} from 'react-native'
import store from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto } from "../redux/photoSlice";
const HomeSceen = () => {
    const data = useSelector(state => state.photos)
    const dispatch  = useDispatch()
    // useEffect(()=> {
    //     const action = addPhoto(
    //         {id  : data.length +1  , name  : "name"}
    //     )
    //     console.log({action} , "action");
    //     dispatch(action)
    // },[])
    console.log(data , "da");
    const  renden = ({item}) => {
        console.log(item.name , "item");
        return (
            <View>
                <Text>
                    {item.name}
                </Text>
            </View>
        )
    }
    return (
        <View>
            {/* <Text>HomeSceen</Text> */}
            <FlatList
               data={data}
               renderItem={renden}
               />
        </View>
    )
}
export default HomeSceen