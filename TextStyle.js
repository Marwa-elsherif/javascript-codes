
var radios =document.querySelector("radio");
var PAR = document.getElementById("PAR");

function ChangeFont(Font) {
    PAR.style.fontFamily = Font;
  }
  
function ChangeHeight(Height) {
    PAR.style.lineHeight = Height;
  }
  function ChangeAlign(Align) {
    PAR.style.textAlign = Align;
  }
  
  
  function ChangeLSpace(LSpace) {
    PAR.style.letterSpacing = LSpace;
  }
  
  function ChangeIndent(Indent) {
    PAR.style.textIndent = Indent;
  }
  
  function ChangeTransform(Transform) {
    PAR.style.textTransform = Transform;
  }
  
  function ChangeDecorate(Decorate) {
    PAR.style.textDecoration = Decorate;
  }

  function ChangeBorder(Style) {
    PAR.style.borderStyle = Style;
  }
  function ChangeBorderColor(Color) {
    PAR.style.borderColor = Color;
  }