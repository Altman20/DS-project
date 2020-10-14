  var members = new Vue({
      el: '#membersApp',
      data: {
        memberList: [],
        newMemberForm: {}

},

methods: {
  newMemberData() {
    return {
      firstName:"",
      lastName:"",
      radio:"",
      station:""
    }
  },
  handleNewMemberForm(){
    fetch('api/firefighters/post.php', {
      method:'POST',
      body: JSON.stringify(this.newMemberForm),
      headers: {
        "Content-Type": "applicaiton/json; charset=utf-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log("returned from post:", json);
      this.memberList.push(json[0]);
    });
    console.log("creating (POSTing)...!");
    console.log(this.newMemberForm);
    this.newMemberForm = this.newMemberData();
  }
  },
  created() {
    fetch("api/firefighters/")
    .then(response => response.json())
    .then(json => {
      this.memberList = json;
      console.log(json)}
    );
    this.newMemberForm = this.newMemberData();
  }
})
