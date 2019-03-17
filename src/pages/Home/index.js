import React from 'react'
import { View } from 'react-native'
import Stories from '../../components/Stories'
import Feeds from '../../components/Feeds'

class Home extends React.Component{
    render(){
        return(
            <View>
                <Stories />
                <Feeds />
            </View>
        )
    }
}

export default Home