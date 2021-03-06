import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ModelsScreen extends StatefulWidget {
  ModelsScreen({Key key}) : super(key: key);

  @override
  _ModelsScreenState createState() => _ModelsScreenState();
}

class _ModelsScreenState extends State<ModelsScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("3D Models"),
      ),
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(10.0),
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                InkWell(
                  child: Padding(
                    padding: EdgeInsets.all(12.0),
                    child:
                        Text('Przyłbica Prusy', style: TextStyle(fontSize: 28)),
                  ),
                  onTap: () => launch(
                      'https://www.prusaprinters.org/prints/25857-prusa-face-shield'),
                ),
                Image(
                  image: AssetImage('assets/Prusa_cover.jpg'),
                )
              ]),
        ),
      ),
    );
  }
}
