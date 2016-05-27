#pragma strict

var player : Transform;
var rotate_spd : float;
var appro_spd  : float;

function Start () {

}

function Update () {
    var h = Input.GetAxis("CamHorizontal") * rotate_spd * Time.deltaTime;
    var v = Input.GetAxis("CamVertical")   * rotate_spd * Time.deltaTime;
    var a = Input.GetAxis("CamApproach")   * appro_spd;
    var angv = transform.eulerAngles.x;
    Debug.Log("angv="+angv+", v="+v);

    var v_axis = transform.position - player.position;
    v_axis = Vector3(-v_axis.z, 0, v_axis.x);


    if ( angv + v > 90 ) {
    	v = 90 - angv;
    }
    if ( angv + v < 0) {
    	v = -angv;
    }

    //Debug.Log("H="+h+", V="+v+", A="+a);
    transform.RotateAround( player.position, Vector3.up, h );
    transform.RotateAround( player.position, v_axis, v );
}