import 'package:cdruk/login_screen.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

import 'signup_screen.dart';
import 'signup_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CDRUK',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        //visualDensity: VisualDensity.adaptivePlatformDensity, psuje sie tutaj więc wywaliłem
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("CDRUK"),
      ),
      body: Center(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          RichText(
            text: TextSpan(
                text:
                    'Lekarzom w całej polsce brakuje sprzętu, Jest im teraz potrzebna pomoc, aby mogli pomagać nam\n',
                style: TextStyle(
                  fontSize: 30,
                  color: Colors.black87,
                ),
                children: <TextSpan>[
                  TextSpan(
                      text:
                          '\nMasz drukarkę 3D i chcesz pomóc służbie zdrowia?',
                      style: TextStyle()),
                  TextSpan(
                      text: '\nZarejestruj się!\n',
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => SignupScreen()));
                        }),
                  TextSpan(text: '\nW twoim szpitalu brakuje sprzętu?'),
                  TextSpan(
                      text: '\nZgłoś się do nas!',
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                         //todo navigate to contact screen that not exist yet
                        })
                ]),
          )
        ],
      )),
      drawer: Drawer(
          child: ListView(
        children: ListTile.divideTiles(
            //          <-- ListTile.divideTiles
            context: context,
            tiles: [
              DrawerHeader(
                child: Text('CDRUK'),
                decoration: BoxDecoration(
                  color: Color.fromRGBO(179, 179, 179, 0.4),
                ),
              ),
              ListTile(
                title: Text('Log in'),
                onTap: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => LoginScreen()));
                },
              ),
              ListTile(
                title: Text('Sign up'),
                onTap: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => SignupScreen()));
                },
              ),
              ListTile(
                title: Text('3D Models'),
                onTap: () {
                  //todo page with links to 3d models
                },
              ),
              ListTile(
                title: Text('Contact'),
                onTap: () {
                  //todo page with contact to us
                },
              )
            ]).toList(),
      )),
    );
  }
}
