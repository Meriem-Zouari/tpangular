export class Personne {
  id : Number;
  name : string;
  firstname : string;
  age : Number;
  path : string;
  cin : Number;
  job : string;

  constructor(id=0,name='',firstname='',age=0,path='',cin=1,job=''){
    this.id=id;
    this.name=name;
    this.firstname=firstname;
    this.age=age;
    this.path=path;
    this.cin=cin;
    this.job=job;
  }
}