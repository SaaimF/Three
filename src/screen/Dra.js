import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerAnimation] = useState(new Animated.Value(0));

  const toggleDrawer = () => {
    const toValue = drawerOpen ? 0 : 1;

    Animated.timing(drawerAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setDrawerOpen(!drawerOpen);
  };

  const translateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-270, 0],
  });
  const translateX1 = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 270],
  });

  const translateX1l = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -130],
  });
  const translateX2 = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0,90], 
  });
  // const translateX3 = drawerAnimation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0,150], 
  // });

  // const translateYellowScreen = drawerAnimation.interpolate({
  //   inputRange: [0, height],
  //   outputRange: [height, height - 50], 
  // });
  
  const closeDrawer = () => {
    if (drawerOpen) {
      toggleDrawer();
    }
  };

  return (
    <View style={styles.container} onStartShouldSetResponder={closeDrawer}>
      <View style={{flexDirection:'row',width:width}} >
     
      <Animated.View
        style={[
          {
            
            backgroundColor: drawerOpen ? '#fff' : '#0070B8',
            height: drawerOpen ? height/1.3 : height,
            borderRadius: drawerOpen ? 30 : 0,width:width,
           
           
         
          },
          {
            transform: [{ translateX: translateX1 },
              {translateY:translateX2},
              // {translateY:translateX3}
            ],
          },
        ]}
      >
        <View
          style={{
            marginLeft: 10,
          
         
          }}>
          {!drawerOpen && (
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={toggleDrawer}>
              <Image
                source={require('../assets/pics/R.png')}
                style={styles.pic}
              />
            </TouchableOpacity>
          )}

                  
        </View>
        <Animated.View style={{
          // backgroundColor:'red',height:250
        }} >
        <View style={{flexDirection:'row',alignItems:'flex-start',justifyContent:'center',marginTop:20,backgroundColor: drawerOpen ? '#0070B8' : '#fff',padding:25,margin:10,borderRadius:30}} >
          <View>
            <Text style={{fontSize:25,color:'#8e8e8e'}} >Your Name</Text>
            <Text style={{fontSize:30,fontWeight:'bold',color:'#000'}} >Saaim Fasih </Text>
          </View>
           <Image
            source={require('../assets/pics/Prof.png')}
            style={{height:180,width:140,borderRadius:25}}
          />
          </View>
          <View style={{flexDirection:'row',top:-120,marginLeft:10,width:170,justifyContent:'space-around'}} >
          <View   >
            <Text style={{color:'#8e8e8e'}} >Rated</Text>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}  >4.3%</Text>
          </View>
          <View>
            <Text style={{color:'#8e8e8e'}} >Reviews</Text>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}  >135</Text>
          </View></View>
          
<View style={{backgroundColor:'#fff' ,borderRadius:25,height: drawerOpen ? 0 : 390,alignItems:'center',justifyContent:'space-around' }} > 

<Text style={{fontSize:30,color:'#000'}} >Get  Messeges</Text>
<Text style={{fontSize:30,color:'#000'}} >Messeges Friends</Text>
<Text style={{fontSize:30,color:'#000'}} >Messeges</Text>
<Text style={{fontSize:30,color:'#000'}} >Get New Messeges</Text>
</View>
          </Animated.View>
      </Animated.View>
      <Animated.View
        style={[
          {
            marginRight:90,
            backgroundColor: '#fff',
            height: drawerOpen ? height/1.4 : height,
            borderRadius: drawerOpen ? 30 : 0,width:width,
            top: drawerOpen ? 20 : 0,
            opacity:0.4
           
         
          },
          {
            transform: [{ translateX: translateX1l },
              {translateY:translateX2},
              // {translateY:translateX3}
            ],
          },
        ]}
      ></Animated.View></View>
      <Animated.View style={[styles.drawer, {transform: [{translateX}]}]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: height / 15,
            width: drawerOpen ? width : width / 1.9,
            borderBottomRightRadius: 20,
            backgroundColor: '#0070B8',
            justifyContent: 'space-around',marginLeft:10
          }}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleDrawer}>
            <Image
              source={require('../assets/pics/R.png')}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#fff',
            

            }}>
            Inbox
          </Text>
         {drawerOpen ? 
          <Image source={require('../assets/pics/Set.png')} style={styles.pic5} />
: null }     
   </View>
        <View style={{height: height / 2, justifyContent: 'space-around',marginLeft:10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 20,
              marginLeft: -80,
            }}>
            <Image
              source={require('../assets/pics/Prof.png')}
              style={styles.pic2}
            />
            <Text style={styles.drawerContent}>Saaim Fasih</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 20,
              marginLeft: -145,
            }}>
            <Image
              source={require('../assets/pics/inb.png')}
              style={styles.pic3}
            />
            <Text style={styles.drawerContent1}>Inbox</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 20,
              marginLeft: -145,
            }}>
            <Image
              source={require('../assets/pics/Sta.png')}
              style={styles.pic4}
            />
            <Text style={styles.drawerContent1}>Stard</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 20,
              marginLeft: -140,
            }}>
            <Image
              source={require('../assets/pics/Sen.png')}
              style={styles.pic4}
            />
            <Text style={styles.drawerContent1}>Sentt</Text>
          </View>
          
        </View>
      </Animated.View>
    </View>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      backgroundColor: '#0070B8', // Change this to your desired background color
    },
    drawer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 270,
      backgroundColor: 'rgba(0, 112, 184, 0.2)', // Adjust alpha (last value) for transparency
      borderRightWidth: 1,
      borderColor: '#0070B8',
      zIndex: 1,
  
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  drawerContent: {
    marginLeft: -150,
    fontSize: 25,
  },
  drawerContent1: {
    marginLeft: -280,
    fontSize: 25,
  },
  closeIcon: {
    height: height / 16,
    width: width / 7,
    tintColor: '#fff',
 
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  pic: {
    height: height / 18,
    width: width / 9,
  },
  pic2: {
    height: height / 16,
    width: width / 7,
    borderRadius: 30,
  },
  pic5: {
    height: height / 25,
    width: width / 12,
    borderRadius: 30,
  },
  pic3: {
    height: height / 18,
    width: width / 8,
    tintColor: '#FE0062',
  },
  pic4: {
    height: height / 17.7,
    width: width / 8,
    tintColor: '#8e8e8e',
  },
});

export default Drawer;
