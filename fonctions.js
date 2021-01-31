function murs_active() {
	model.visible = true;
	plafonds.visible = true;
	plafonds2.visible = true;
	joues1.visible = true;
	joues2.visible = true;
}

function murs_inactive() {
	model.visible = false;
	plafonds.visible= false;
	plafonds2.visible = false;
	joues1.visible = false;
	joues2.visible = false;
}	

function liteaux_active() {
	liteaux.visible = true;
	liteaux1.visible = true;
	liteaux2.visible = true;
}	

function liteaux_inactive() {
	liteaux.visible = false;
	liteaux1.visible = false;
	liteaux2.visible = false;
}

function tuiles_active() {
	//tuilesL.visible = true;
	tuiles11.visible = true;
	tuiles12.visible = true;
	tuiles13.visible = true;
	tuiles21.visible = true;
	tuiles22.visible = true;
	tuiles23.visible = true;
	tuiles31.visible = true;
	tuiles32.visible = true;
	tuiles33.visible = true;
	tuiles41.visible = true;
	tuiles42.visible = true;
	faitieres.visible = true;
	tuiles1.visible = true;
	faitieres1.visible = true;
	ciment1.visible = true;	
	tuiles2.visible = true;
	faitieres2.visible = true;
	ciment2.visible = true;
}

function tuiles_inactive() {
	//tuilesL.visible = false;
	tuiles11.visible = false;
	tuiles12.visible = false;
	tuiles13.visible = false;
	tuiles21.visible = false;
	tuiles22.visible = false;
	tuiles23.visible = false;
	tuiles31.visible = false;
	tuiles32.visible = false;
	tuiles33.visible = false;
	tuiles41.visible = false;
	tuiles42.visible = false;
	faitieres.visible = false;
	tuiles1.visible = false;
	faitieres1.visible = false;
	ciment1.visible = false;
	tuiles2.visible = false;
	faitieres2.visible = false;
	ciment2.visible = false;
}	

function isolation_active() {
	iso.visible = true;
	iso2.visible = true;
}

function isolation_inactive() {
	iso.visible = false;
	iso2.visible = false;
}

function ouvertures_active() {
	bati1.visible = true;
	Vantail1.visible = true;
	Vantail2.visible = true;
	Vitre1.visible = true;
	vitre2.visible = true;
	Bati2.visible = true;
	Vantail3.visible = true;
	Vantail4.visible = true;
	Vitre3.visible = true;
	vitre4.visible = true;
}

function ouvertures_inactive() {
	bati1.visible = false;
	Vantail1.visible = false;
	Vantail2.visible = false;
	Vitre1.visible = false;
	vitre2.visible = false;
	Bati2.visible = false;
	Vantail3.visible = false;
	Vantail4.visible = false;
	Vitre3.visible = false;
	vitre4.visible = false;
}

function accessoires_active() {
	noues1.visible = true;
	noues2.visible = true;
	ciment1.visible = true;
	ciment2.visible = true;
}

function accessoires_inactive() {
	noues1.visible = false;
	noues2.visible = false;
	ciment1.visible = false;
	ciment2.visible = false;	
}

function reset() {
	cameraActive = true;
	camera2Active = false; 
  	controls.reset ();
	controls.autoRotate = false;
	porte.rotation.y = 0;
}

function pause() {
  controls.autoRotate = false;
  sound1.stop();
}

function playback() {
  controls.autoRotate = true;
  sound1.play();
}

function rewind() {
	location.reload();
}

function lucarnes_active() {
	Charpente1 .visible = true;
	liteaux1 .visible = true;
	tuiles1 .visible = true;
	faitieres1.visible = true;
	joues1.visible = true;
	noues1.visible = true;
	ciment1 .visible = true;
	fenetre1 .visible = true;
	Charpente2 .visible = true;
	liteaux2 .visible = true;
	tuiles2 .visible = true;
	faitieres2.visible = true;
	joues2.visible = true;
	noues2.visible = true;
	ciment2 .visible = true;
	fenetre2 .visible = true;
}

function lucarnes_inactive() {
	Charpente1 .visible = false;
	liteaux1 .visible = false;
	tuiles1 .visible = false;
	faitieres1.visible = false;
	joues1.visible = false;
	noues1.visible = false;
	ciment1 .visible = false;
	fenetre1 .visible = false;
	Charpente2 .visible = false;
	liteaux2 .visible = false;
	tuiles2 .visible = false;
	faitieres2.visible = false;
	joues2.visible = false;
	noues2.visible = false;
	ciment2 .visible = false;
	fenetre2 .visible = false;
	
}

function animate2() {
	//controls.reset ();
	camera.position.set( 0, 4, 15 );
	const animate2 = () => {
 	 if (camera.position.z > -3) {
    requestAnimationFrame(animate2);
	}
	setTimeout(ouverture, 250)
	camera.position.lerp( cube.position, 0.015);
	}
  	animate2();
  	}
		
function ouverture() {
	const animate3 = () => {
	if(porte.quaternion.angleTo(targetQuaternion) > 0.05) {
    requestAnimationFrame(animate3);
	}
	porte.quaternion.slerp(targetQuaternion, 0.0005);
	}
	  animate3();
  	} 

function cam1() {
	scene.background = new THREE.Color( 0xcce0ff );
	scene.fog = new THREE.Fog( 0xcce0ff, 1, 100 );
	rain.visible = false;
	lensflare.visible = true;
	light.intensity = 1.8;
	light.shadow.focus = 0.065;
	light.shadow.bias = 0.000001;
	light.shadow.normalBias = 0.02;
	tuiles2_material.shininess = 20;
	pavement_material.shininess = 20;
	sound1.play();
	sound9.stop();
	/*controls.reset ();
	cameraActive = true;
	camera2Active = false;*/ 
}	

function cam2() {
	scene.background = new THREE.Color( 0xa0a8b5 );
	scene.fog = new THREE.Fog( 0xa0a8b5, 1, 100 );
	rain.visible = true;
	lensflare.visible = false;
	light.intensity = 0.5;
	light.shadow.focus = 2.065;
	light.shadow.bias = 0.000001;
	light.shadow.normalBias = 0.35;
	tuiles2_material.shininess = 95;
	tuiles2_material.reflectivity = 95;
	pavement_material.shininess = 145;
	sound1.stop();
	sound9.play();
	/*camera2.position.set( 0, 1, 5 );
	cameraActive = false;
	camera2Active = true;*/   
}

function raval_1() {
	house3_material.color = new THREE.Color(0xaca89f);
	house3_material.needsUpdate = true;
	house2_material.color = new THREE.Color(0xaca89f);
	house2_material.needsUpdate = true;
	house_material.color = new THREE.Color(0xaca89f);
	house_material.needsUpdate = true;

}

function raval_2() {
	house3_material.color = new THREE.Color(0xc1bdb3);
	house3_material.needsUpdate = true;
	house2_material.color = new THREE.Color(0xc1bdb3);
	house2_material.needsUpdate = true;
	house_material.color = new THREE.Color(0xc1bdb3);
	house_material.needsUpdate = true;

}

function raval_3() {
	house3_material.color = new THREE.Color(0xb4a596);
	house3_material.needsUpdate = true;
	house2_material.color = new THREE.Color(0xb4a596);
	house2_material.needsUpdate = true;
	house_material.color = new THREE.Color(0xb4a596);
	house_material.needsUpdate = true;

}

function teinte_1() {
	tuiles_material.color = new THREE.Color(0x48382c);
    tuiles_material.needsUpdate = true;
}

function teinte_2() {
	tuiles_material.color = new THREE.Color(0x96533d);
    tuiles_material.needsUpdate = true;

}

function teinte_3() {
	tuiles_material.color = new THREE.Color(0xbd7245);
    tuiles_material.needsUpdate = true;

}



function clickEffect(e){
	  var d=document.createElement("div");
	  d.className="clickEffect";
	  d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
	  document.body.appendChild(d);
	  d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
	}
	document.addEventListener('click',clickEffect);