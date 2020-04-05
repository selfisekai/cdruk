import 'dart:convert';

import 'package:cdruk/api_response.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class _Api {
  final baseUrl = 'https://cdruk.ddd.codes/api';

  Future<dynamic> login(String email, String password) async {
    var res = await http.post(
      baseUrl + '/login',
      body: {'email': email, 'password': password} 
    );
    print(res.body);
    var resp = json.decode(res.body);
    if (resp['error'] == null) return res.body;
    else return resp;
  }

  Future<dynamic> register(String name,String email, String password) async {
    var res = await http.post(
      baseUrl + '/register',
      body: {'name': name, 'email': email, 'password': password} 
    );
    print(res.body);
    var resp = json.decode(res.body);
    if (resp['error'] == null) return ApiResponse.fromJson(resp);
    else return resp;
  }

  Future<dynamic> getProfiile() async {
    SharedPreferences _preferences = await SharedPreferences.getInstance();
    var res = await http.get(
      baseUrl + '/profile/me',
      headers: {'Authorization': _preferences.getString("token")}
    );
    print(res.body);
    var resp = json.decode(res.body);
    if (resp['error'] == null) return resp;
    else return resp;
  }
}

var api = _Api();