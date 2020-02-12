var getinput = function(){
	return{
		userFirstName: document.querySelector('.userFirstName').value,
		userLastName: document.querySelector('.userLastName').value,
		userEmailId: document.querySelector('.userEmailId').value,
		userDescription: document.querySelector('.userFeedBack').value
	};
}

document.querySelector('.user-submit').addEventListener('click', function(){
	var userData = getinput();
	console.log(userData);
})

var sourabh = {
	name: 'sourabh',
	lastName: 'chavan',
	job:'UI developer'
}