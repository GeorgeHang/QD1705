function elementsByClassName(parent, className){
	//1、现将parent所有节点获取
	var nodes = parent.getElementsByTagName("*");
	//2、筛选
	var res = [];
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].className == className){
			res.push(nodes[i]);
		}
	}
	return res;
}

/*
	【注】选择器写法进行传参
	getElementById 			#id
	getElementsByTagName    tagName
	getElementsByName       name=hello
	getElementsByClassName  .box
*/
function $(vArg){
	switch(vArg[0]){
		case "#":
			return document.getElementById(vArg.substring(1));
			break;
		case ".":
			return elementsByClassName(document, vArg.substring(1));
			break;
		default:
			//取出前面五个字符
			var subStr = vArg.substring(0, 5);
			if(subStr == "name="){
				//name
				return document.getElementsByName(vArg.substring(5));
			}else{
				//tagName
				return document.getElementsByTagName(vArg);
			}
			break;
	}
}

function getStyle(elem, attr){
	return elem.currentStyle ? elem.currentStyle[attr] : getComputedStyle(elem)[attr];
}

function randomColor(){
	var color = "rgba(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ",1)";
	return color;
}


/*
	有一个函数可以创建一个带文本节点的元素节点
*/
function createElementWithText(tagName, txtStr){
	var node = document.createElement(tagName);
	var oTxt = document.createTextNode(txtStr);
	node.appendChild(oTxt);
	return node;
}


function insertAfter(newNode, oldNode){
	//判断oldNode是否是最后一个
	if(oldNode == oldNode.parentNode.lastChild){
		oldNode.parentNode.appendChild(newNode)
	}else{
		oldNode.parentNode.insertBefore(newNode, oldNode.nextSibling);
	}
}


function removeSpaceNode(nodes){
	var res = []; //存储不是空白的节点
	for(var i = 0; i < nodes.length; i++){
		if(!(nodes[i].nodeType == 3 && /^\s+$/ig.test(nodes[i].nodeValue))){
			res.push(nodes[i]);
		}
	}
	return res;
}


function removeSpaceNode2(parent){
	//子节点
	var nodes = parent.childNodes;
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].nodeType == 3 && /^\s+$/ig.test(nodes[i].nodeValue)){
			//将空白节点删除
			parent.removeChild(nodes[i]);
		}
	}
}


function stopBubble(e){
	if(e.cancelBubble){
		e.cancelBubble = true;
	}else{
		e.stopPropagation();
	}
}







