if (typeof(HTMLElement)!="undefined" && !window.opera)
{
  HTMLElement.prototype.__defineGetter__("parentElement", function ()
  {
    if (this.parentNode == this.ownerDocument) return null;
    return this.parentNode;
  });
}

/*HTMLElement.prototype.innerHTML getter = function(){
   return getInnerHTML(this);
};*/

function CopyCode(key)
{
  var obj = key.parentElement.parentElement.parentElement.getElementsByTagName("pre");
  if (obj)
  {
    if (navigator.appName.indexOf('Microsoft') != -1)
	  copyToClipboard(obj[0].innerText);
    else
    {
	  copyToClipboard(obj[0].textContent);
	}
  }
}
function Html2Txt(htmlText)
{
  str = htmlText.replace(/\r\n/g, " ");
  str = str.replace(/\r/g, " ");
  str = str.replace(/\n/g, " ");
  str = str.replace(/\t/g, "");
  str = str.replace(/<br>/gi,"\r\n");
  str = str.replace(/<br \/>/gi,"\r\n");
  str = str.replace(/<[^>]+?>/g,"");
  str = str.replace(/&nbsp;/g, " ");
  str = str.replace(/&gt;/g, ">");
  str = str.replace(/&lt;/g, "<");
  str = str.replace(/&amp;/g, "&");
  return str;
}

function copyToClipboard(txt)
{
 if(window.clipboardData)
  {
    window.clipboardData.clearData();
    window.clipboardData.setData("Text", txt);
  }
  else if(navigator.userAgent.indexOf("Opera") != -1)
  {
    window.location = txt;
  }
  else if (window.netscape)
  {
    try
    {
      netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
    }
    catch (e)
    {
      alert("您的 Firefox 安全限制限制您进行剪贴板操作，请在地址栏中输入“about:config”将“signed.applets.codebase_principal_support”设置为“true”之后重试！");
      return false;
    }
    var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
    if (!clip) return;
    var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
    if (!trans) return;
    trans.addDataFlavor('text/unicode');
    var str = new Object();
    var len = new Object();
    var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
    var copytext = txt;
    str.data = copytext;
    trans.setTransferData("text/unicode",str,copytext.length*2);
    var clipid = Components.interfaces.nsIClipboard;
    if (!clip) return false;
    clip.setData(trans,null,clipid.kGlobalClipboard);
  }
}