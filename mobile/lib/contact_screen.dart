import 'package:flutter/material.dart';

class ContactScreen extends StatefulWidget {
  ContactScreen({Key key}) : super(key: key);

  @override
  _ContactScreenState createState() => _ContactScreenState();
}

class _ContactScreenState extends State<ContactScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Contact"),
      ),
      body: Center(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              RichText(
                text: TextSpan(
                    text:
                        'Twój szpital potrzebuje sprzętu? Skontaktuj się z nami!\n',
                    style: TextStyle(
                      fontSize: 30,
                      color: Colors.black87,
                    ),
                    children: <TextSpan>[
                      TextSpan(text: "E-mail: example@email.com")
                    ]),
              )
            ]),
      ),
    );
  }
}
