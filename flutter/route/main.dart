import 'package:flutter/material.dart';
import 'package:jia_yi_app/page/index.dart';
import 'package:jia_yi_app/page/login.dart';
import 'package:jia_yi_app/page/register.dart';


void main() => runApp(MyAppPage());

var inipage = '';

class MyAppPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => MyAppState();
}

class MyAppState extends State<MyAppPage> {
  @override
  void initState() {
    super.initState();
    var islogin = false;
    if(islogin){
      inipage = '/index';
    }else{
      inipage = '/login';
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        builder: (context, child) => Scaffold(
          body: GestureDetector(
            onTap: () {
              hideKeyboard(context);
            },
            child: child,
          ),
        ),
        initialRoute: inipage, //加route
        routes: {
          '/index': (context) => IndexPage(),
          '/login': (context) => LoginPage(),
          '/register': (context) => RegisterPage()
        });
  }
  
  //使用鍵盤時按旁邊會隱藏鍵盤
  void hideKeyboard(BuildContext context) {
    FocusScopeNode currentFocus = FocusScope.of(context);
    if (!currentFocus.hasPrimaryFocus && currentFocus.focusedChild != null) {
      FocusManager.instance.primaryFocus!.unfocus();
    }
  }
}