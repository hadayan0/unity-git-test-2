#pragma strict

var speed = 10;

function Start () {
	Debug.Log("Hello,world");
}


function Update ()
{
	var x = Input.GetAxis("Horizontal");
	var z = Input.GetAxis("Vertical");

	var rigidbody = GetComponent(Rigidbody);
	rigidbody.AddForce( x * speed, 0, z * speed );
}
