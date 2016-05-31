#pragma strict

var player : Transform;
var rotate_spd : float;
var vertical_spd : float;
var approach_spd  : float;

var vertical_max : float;
var vertical_min : float;
var approach_max : float;
var approach_min : float;

function Start () {

}

function Update () {
    var h =  Input.GetAxis("CamHorizontal") * rotate_spd * Time.deltaTime;
    var v = -Input.GetAxis("CamVertical")   * vertical_spd * Time.deltaTime;
    var a = -Input.GetAxis("CamApproach")   * approach_spd * Time.deltaTime;
    var angv = transform.eulerAngles.x;
    //Debug.Log("angv="+angv+", v="+v);

    // vertical
    //transform.position.y += v;
    var v_axis = transform.position - player.position;
    v_axis = Vector3(-v_axis.z, 0, v_axis.x);
    if ( angv + v > vertical_max ) {
    	v = vertical_max - angv;
    }
    else if ( angv + v < vertical_min) {
    	v = vertical_min - angv;
    }
    transform.RotateAround( player.position, v_axis, v );

	// horizontal
    transform.RotateAround( player.position, Vector3.up, h );

    // approach
    var distance = (transform.position-player.position).magnitude;
    a = Mathf.Min( a, distance - approach_min );
	a = Mathf.Max( a, distance - approach_max );
    transform.Translate( 0, 0, a );

    transform.LookAt( player );

    //Debug.Log("H="+h+", V="+v+", A="+a);
}
