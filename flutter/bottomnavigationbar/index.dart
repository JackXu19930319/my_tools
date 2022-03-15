
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:jia_yi_app/page/meeting.dart';
// ignore: unused_import
import 'package:jia_yi_app/page/user.dart';
// import 'package:jia_yi_app/page/login.dart';

//需使用 StatefulWidget 
class IndexPage extends StatefulWidget {
  const IndexPage({Key? key}) : super(key: key);

  @override
  _IndexPageState createState() => _IndexPageState();
}

class _IndexPageState extends State<IndexPage> {
  //初始頁面的index
  int _currentIndex = 0;
  //將頁面page()匯入list
  List<Widget> page = [
    MeetingPage(),
    UserPage(),
  ];
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        bottomNavigationBar: BottomNavigationBar(
          type: BottomNavigationBarType.fixed,
          currentIndex: _currentIndex,
          onTap: _onItemClick, // 獲取點選的頁面index
          items: [
            // ignore: deprecated_member_use
            BottomNavigationBarItem(icon: Icon(Icons.home), title:  Text('Home')),
            // ignore: deprecated_member_use
            BottomNavigationBarItem(icon: Icon(Icons.person), title: Text('Business')),
          ],
        ),
        body: page[_currentIndex], //根據或許得頁面index去改編body
      ),

    );
  }
  //根據或許得頁面index去改編body
  void _onItemClick(int index){
    setState(() {
      _currentIndex = index;
    });
  }
}