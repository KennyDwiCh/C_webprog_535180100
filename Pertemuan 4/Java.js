function ChangeAll(str){
      document.getElementById("cLine1").innerHTML = str;
      document.getElementById("cLine2").innerHTML = str;
      document.getElementById("cLine1").className="MakeRed";
      document.getElementById("cLine2").className="MakeRed";
}
function ChangeContent(id, num) {
    var x;
    x = 3;
    var res = num + x;
    document.getElementById(id).innerHTML = "3 + " + num + " = " + res;
    document.getElementById(id).innerHTML = "3 + " + num + " = " + num + 3;
}
function AddString(id, str1, str2) {
    document.getElementById(id).innerHTML = str1 + str2;
}
var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet ultrices iaculis.";
function ForLoop(iteration) {
    for (i = 0; i < iteration; i++) {
        document.getElementById("oResult").innerHTML += str + "<br />";
    }   
}
var Person = {

    Email: "",
    NIM: "",
    Nama: "",
    Hobbies: [],

    AddBio: function (pEmail, pNIM, pNama) { 
        this.Email = pEmail;
        this.NIM = pNIM;
        this.Nama = pNama;
    },

    AddHobby: function (pHobby) { 
        this.Hobbies.push(pHobby);
    },

    Write: function () {
        var str = "Bio: " + this.Email + ", " + this.NIM + ", " + this.Nama;
        var hobb = "Hobbies: ";
        var item;
        for (item of this.Hobbies) {
            hobb += item + " ";
        }
        return str + " " + hobb;
    }

}

function AddBioInfo(pEmail, pNIM, pNama) {
    Person.AddBio(pEmail, pNIM, pNama);
}

function AddHobby(pHobby) {
    Person.AddHobby(pHobby);
}

function LoadObject() {
    document.getElementById("oResult").innerHTML = Person.Write();
}
