import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class MeetingPage extends StatefulWidget {
  const MeetingPage({Key? key}) : super(key: key);

  @override
  _MeetingPageState createState() => _MeetingPageState();
}

class _MeetingPageState extends State<MeetingPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            // title: Text('註冊'),
            ),
        body: Container(
          padding: const EdgeInsets.symmetric(vertical: 50),
          child: Column(
            children: [
              Column(
                children: [
                  TextField(
                    decoration: InputDecoration(hintText: "請輸入信箱......"),
                  ),
                  TextField(
                    decoration:
                        InputDecoration(hintText: "請輸入密碼(最多12個字)......"),
                    obscureText: true,
                  ),
                  TextField(
                    decoration: InputDecoration(hintText: "確認密碼(最多12個字)......"),
                    obscureText: true,
                  ),
                  RawMaterialButton(
                      onPressed: regPressed,
                      child: Icon(
                        Icons.read_more,
                        size: 48,
                      ))
                ],
              ),
            ],
          ),
        ));
  }

  Future<void> regPressed() async {
     Navigator.of(context, rootNavigator: true).pushNamed("/register");
  }
}
