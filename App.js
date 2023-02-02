import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';

const businessCard = {
    imageUrl: "https://tinypng.com/images/social/website.jpg",
    companyName: "Volvoo",
    quote: "Volvo. For life.",
    employee: [
        "Tobias Juul Rasmussen",
        "20 67 65 60",
        "tobiasras.job@gmail.com"
    ]
}
function BusinessCard(props) {


    const styles2 = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            justifyContent: 'flex-start',
            alignItems: "flex-start"
        },
    });


    return (
        <View style={styles2.container}>
            <CompanyName name={props.company.companyName}/>
            <Quote quote={props.company.quote}/>
            <ImageCard imageURI={props.company.imageUrl} ></ImageCard>
            <Employee employee={props.company.employee}/>
        </View>
    );
}
function CompanyName(props) {
    return (
        <Text>{props.name}</Text>
    );
}
function ImageCard(props) {

    const sourceURI = {uri: props.imageURI};

    const styles = StyleSheet.create({
        logo: {
            width: 200,
            height: 150,
            alignSelf: "center",
            marginBottom: 20
        },

        source: {},
    });

    return (
        <Image source={sourceURI}
               style={styles.logo}>
        </Image>
    )

}
function Employee(props) {
    return (
        <>
            {props.employee.map((field, index) => (<Text key={index}>{field}</Text>))}
        </>
    );

}

function Quote(props) {
    return (
        <Text>{props.quote}</Text>
    );
}


export default function App() {
    return (
        <View style={styles.container}>
            <BusinessCard company={businessCard}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: "center"
    },
});


