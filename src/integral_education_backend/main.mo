import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Iter "mo:base/Iter";
import Array "mo:base/Array";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";





actor {

  // Unique time stamp
  type Time = Time.Time;




  // Unique user identity 
  stable var AuthUser : Text = "";
  // check for access control
  stable var HasAccess = false;
  // User unique name
  stable var name : Text = "guest";

  public query func greet(_name : Text) : async Text {
    // Authorize user
    AuthUser := _name;
    // grant the user access
    HasAccess := true;

    name := _name;
    // Great user
    return "Hello, " # name # "!";
  };



  /**
    FOR ADMINS
  **/
  // User setting datatype
  type Setting = {
    name : Text;
    email: Text;
    password : Text;
  };

  // Hashmap for users settings
  let Users : HashMap.HashMap<Text, Setting> = HashMap.HashMap<Text, Setting>(0, Text.equal, Text.hash);




  // User datatype
  type ActiveUser = {
    name : Text;
  };
  // User datatype
  type ActiveUserPoint = {
    point : Int;
  };

  // points datatype
  public type PointType = Int;

  // Hashmap for points
  let Points : HashMap.HashMap<Text, PointType> = HashMap.HashMap<Text, PointType>(0, Text.equal, Text.hash);



  public shared func putPoint(user : ActiveUser, point : ActiveUserPoint) : async Text {
    
    // check if the user exist
    let _user = Points.get(user.name);

    switch(_user) {
      case(?_user) { 

        if(point.point > 0){
          let _point = _user + point.point;
          Points.put(user.name, _point);
          return "point updated";
        };

        let _point = _user + point.point;
        Points.put(user.name, point.point);
        return "point updated";
       };
      case(null) { 
        Points.put(user.name, 1);
        return "point added";
      };
    };
  };

  public func getPoint(user : ActiveUser) : async Int {
    
    // check if the user exist
    let _user = Points.get(user.name);

    switch(_user) {
      case(?_user) { 
        return _user;
       };
      case(null) { 
        return 0;
      };
    };
  };

  public func allPoint() : async Int {
    
    // check if point exist
    let _points = Points.size();
    return _points;

  };

  public func leaderKeys() : async [Text]{
    
    let iter : Iter.Iter<Text> = Points.keys();
    return Iter.toArray<Text>(iter);

  };

  public func leaderValues() : async [Int]{
    
    let iter : Iter.Iter<Int> = Points.vals();
    return Iter.toArray<Int>(iter);

  };

  
  public func leaderTotalValues() : async Int{
    
    let iter : Iter.Iter<Int> = Points.vals();
    let iterArray = Iter.toArray<Int>(iter);
    var sum : Int = 0;
    for (element in iterArray.vals()) {
      sum += element;
    };
    return sum;

  };


  public func leaderEntries() : async [(Text, Int)]{
    
    let iter : Iter.Iter<(Text, Int)> = Points.entries();

    return Iter.toArray<(Text, Int)>(iter);

  };

  public func leaderBoardPosition(user : ActiveUser) : async Int {
    // leader points
    let _leaderPoint = await leaderTotalValues();
    // check if point exist
    let _points = Points.size();
    // check if the user exist
    let _user = Points.get(user.name);

    switch(_user) {
      case(?_user) { 
        return ((_user * 100)/_leaderPoint);
       };
      case(null) { 
        return 0;
      };
    };


  };



  public func unixTime() : async Nat64{
    let creationTime : Nat64 = Nat64.fromNat(Int.abs(Time.now()));
    return creationTime;
  };

  private func currentTime() : async Nat{
    let currentTime : Nat = Int.abs(Time.now());
    return currentTime;
  };


  // Total Points = 36
  // Total Entry (user with points) = 6

  // total point - your point
  // Your Points = 12
  // Your Percentage = 20%





    // Format
    /**
      un_policy = {
        {
          "que": "what is UN",
          "opt": ["a":"united state", "b":"united country", "c":"united nation"],
          "ans": "c"
        },
        {
          "que": "what is drug",
          "opt": ["a":"medicine", "b":"any subtance that help our body with nutrient", "c":"subtance"],
          "ans": "b"
        }
      }
    **/

    // public type QuestionCategoryType = {
    //   #UN_POLICY;
    //   #DRUG_TRAFFICKING;
    // };

    public type QuestionCategoryType = Text;

    public type Option = {
        a : Text;
        b : Text;
        c : Text;
        d : Text;
    };

    public type Question = {
      question : Text;
      option : Option;
      answer : Text;
    };

    public type QuestionType = [Question];

    let TestQuestions : HashMap.HashMap<Text, QuestionType> = HashMap.HashMap<Text, QuestionType>(0, Text.equal, Text.hash);
    
    public func putQuestion(category : QuestionCategoryType, question : Question) : async Text {
    
    let _new_question : QuestionType = [question];

     TestQuestions.put(category, _new_question);
        return "question added";
        // return "error adding question";

  };

  public func getQuestion(category : Text) : async ?QuestionType {
    // check if the user exist
    let _question = TestQuestions.get(category);
    return _question;

  };



  public func questionEntries() : async [(Text,[Question])]{
    
    let iter : Iter.Iter<(Text, QuestionType)> = TestQuestions.entries();

    return Iter.toArray<(Text, QuestionType)>(iter);

  };

};






