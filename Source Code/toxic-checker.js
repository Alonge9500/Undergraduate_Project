<script>
const toxicwords = ["fuck", "asshole", "lol"];
var text=''
document.body.onkeypress = function(e) {
text = document.getElementById('dan').value
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
  //alert('hello')
  //document.getElementById('dan')
    //your code
    
    text_list = text.split(' ');
    var checktext = text_list.at(-1);
    if (toxicwords.includes(checktext)){
    text = text.replace(checktext,"");
    lenn = text.length - 1;
	text = text.substring(0,lenn);
    }
    
  }
  else{
  }
 document.getElementById('dan').value=text
}

</script>