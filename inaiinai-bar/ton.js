(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 320,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ton_1.jpg", id:"ton_1"},
		{src:"images/ビットマップ1.png", id:"ビットマップ1"}
	]
};



// symbols:



(lib.ton_1 = function() {
	this.initialize(img.ton_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,480);


(lib.ビットマップ1 = function() {
	this.initialize(img.ビットマップ1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,34);


(lib.顔 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993300").ss(5,1,1).p("ACohpQBGAsAAA9QAAA9hGAtQhGArhiAAQhhAAhGgrQhGgtAAg9QAAg9BGgsQBGgrBhAAQBiAABGArgABrgbIAABLAh2gbIAABF");
	this.shape.setTransform(0.6,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9966").s().p("AinBqQhGgsAAg+QAAg9BGgsQBGgrBhAAQBiAABGArQBGAsAAA9QAAA+hGAsQhGArhiAAQhhAAhGgrgABrAwIAAhLgAh2AqIAAhFg");
	this.shape_1.setTransform(0.6,7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,51,0,0.902)").s().p("AGHAtQgPgQAAgYQAAgWAPgRQAQgRAXAAQAWAAAQARQAQARAAAWQAAAYgQAQQgQARgWAAQgXAAgQgRgAnTAjQgQgRAAgWQAAgYAQgRQAQgQAWAAQAXAAAPAQQAQARAAAYQAAAWgQARQgPARgXAAQgWAAgQgRg");
	this.shape_2.setTransform(1.3,-12.1);

	// レイヤー 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9966").s().p("AhBAYQgbgKAAgOQAAgNAbgKQAbgKAmAAQAmAAAbAKQAcAKAAANQAAAOgcAKQgbAKgmAAQgmAAgbgKg");
	this.shape_3.setTransform(-47.8,-2.3);

	// レイヤー 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9966").s().p("Ag3AYQgXgKAAgOQAAgMAXgLQAYgKAfAAQAhAAAXAKQAXALAAAMQAAAOgXAKQgXAJghABQgfgBgYgJg");
	this.shape_4.setTransform(51.2,-2.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.1,-18.4,116.4,43.5);


(lib.耳 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993300").ss(5,1,1).p("AjdhbIgHgKAjdhbQCcirEeAyQAwEajvCaQggiujbiNg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("AjghbQCbirEfAyQAvEajuCaQghiujaiNg");
	this.shape_1.setTransform(0.4,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.4,-25,51,50);


(lib.手 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.ビットマップ1();
	this.instance.setTransform(-4.3,-6.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("Ag2AXIArgCIAIgDQADgCAAgIQAAgIgNgVIAAg4IBEAqQgMAIgVAeQgWAhgTAqQgWgcgNgbg");
	this.shape.setTransform(-4,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("AhPBCQg3hLAAgYQAAgHAJgCIAxgFQgDgPAAgmIABg0QAYAEBNAvIBwBCIgBACQgIABAAAGIgDAFIgGABQgIAAhCgoIgOgIIAAAIQgnBqggALQAaAdAgAeIAVAgIAAAAIABABIgCAAIgBABIAAACQgCABgGAAQgrAAg/hXgAg1g/QAPAXAAAIQgBAIgEACIgIACIgrADQANAZAWAcQAVgpAWggQATggAMgIIhEgrg");

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.5,-15.3,44.2,42.4);


(lib.シンボル1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.耳();
	this.instance.setTransform(165.8,26);

	this.instance_1 = new lib.耳();
	this.instance_1.setTransform(23,22.5,1,1,0,0,180);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,193.8,53.5);


(lib.とん３ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		if( Math.random() <= 0.9 ) {
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(19));

	// レイヤー 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("AD2BBIgFgBQgGgDgFgFIgCgHQgDgGAAgDQAAgFABgCIADgFIADgFQAFgEAHgDIAFgBIAEgBIADgBIADAAIAFABQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAIAAgDIgBgCIgBgHIAAAAIABgCIgBgBIAAgBQAAgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAQABAAACAFIABACIAEAFIAEAJIAEADIAEADIAGABIAJAIIAFAEIACAFQADAFgBAFQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgFgCQgDgCgCgCIgCgDQgFgGgGgEIgCAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAABIABACIAAABIAAABIAAACIAAAAIAAABIAAAFIgFAGIgFAGIgEACIgJADIgIACgAEAAYIgHAEIgFAFIgDAFIgBABIAAABIABADIACACIAAABQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIACABIADABIAFAAQAEgCAFgHIACgEIAAgCIgBgBIABgEIAAgEIgBgCIgCgBIgEAAIgDAAgAkGBBIgFgBQgGgDgEgFIgEgHQgCgGAAgDQAAgFAAgCIAEgFIAEgFQAFgEAFgDIAGgBIADgBIADgBIAFAAIADABQABAAAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAIgBgDIgBgCIAAgHIAAAAIAAgCIAAgBIAAgBQAAgBAAAAQAAAAABAAQAAgBABAAQABAAABAAQABAAABAFIABACIAEAFIAEAJIADADIAGADIAFABIAJAIIAFAEIACAFQACAFAAAFQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgFgCQgDgCgCgCIgCgDQgFgGgGgEIgCAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAABIABACIAAABIAAABIAAACIAAAAIAAABIAAAFIgFAGIgGAGIgDACIgJADIgIACgAj9AYIgGAEIgGAFIgCAFIAAABIgBABIABADIACACIAAABQAAABAAABQAAAAABABQAAAAAAAAQABAAAAAAIACABIAEABIADAAQAFgCAFgHIADgEIgBgCIgBgBIABgEIABgEIgCgCIgDgBIgDAAIgEAAgAGGA9IgFAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgCgDIgGgFQgCgCgBgEIgBgHIAAgCIAAgBIgBgEIgBgDIgBgHIAAgBIAAgCIAAgDIAAgEIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIABgEIAAgBIAAgCIADgPIAAgDIACgGQAEgKAIAAIAFAAIACAEQADADAAAEIgBACIgCAKIABACIAAABIABAFIgBACIAAACIAAABIABABIAAAAIgBABQAAAGAFAKIABAFIAEAHIAFAHQABAEAAAFQAAADgCAEIgGAFIgHAEIgDAAgAAxA9IgDAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgCgDIgGgFQgCgCgBgEIgBgHIAAgCIAAgBIgBgEIgBgDIgBgHIAAgBIAAgCIAAgDIAAgEIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIACgEIAAgBIAAgCIACgPIAAgDIACgGQADgKAJAAIAEAAIADAEQADADAAAEIAAACIgDAKIABACIAAABIABAFIgBACIAAACIAAABIABABIAAAAIgBABQABAGAEAKIABAFIAFAHIADAHQACAEAAAFQAAADgCAEIgHAFIgGAEIgEAAgAh3A9IgDAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBgBAAIgCgDIgGgFQgCgCgBgEIgCgHIAAgCIABgBIgBgEIgBgDIgBgHIAAgBIAAgCIAAgDIAAgEIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIACgEIAAgBIAAgCIABgPIAAgDIADgGQADgKAJAAIAEAAIADAEQADADAAAEIAAACIgDAKIABACIABABIAAAFIAAACIAAACIAAABIAAABIAAAAIAAABQAAAGADAKIACAFIAFAHIADAHQACAEAAAFQAAADgCAEIgHAFIgGAEIgEAAgAnLA9IgEAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAIgDgDIgGgFQgCgCgBgEIgCgHIAAgCIABgBIgBgEIgBgDIgBgHIAAgBIAAgCIAAgDIAAgEIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIABgEIAAgBIAAgCIACgPIAAgDIADgGQAEgKAIAAIAEAAIAEAEQACADAAAEIAAACIgCAKIAAACIABABIAAAFIAAACIAAACIAAABIAAABIAAAAIAAABQAAAGADAKIACAFIAFAHIADAHQACAEAAAFQAAADgDAEIgFAFIgHAEIgEAAgADEAoQgEgDAAgGIABgDIACgEIAEgJIADgKIABgFIACgDIABgFIAAgCIgBgBIgLgDIgBAAIgBAAQgCgBgEgEIgDgFIgBgHIAAgFIAEgHIAFgBIADgBIAGAAIABgBIACgBIAFAAIAEAAIACgBIABgDIgBgCIAAgBIACgDIACgDIABgEQABgCADAAIAEAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAAAIAAABIAAACIgBACIABAEIAAADIAAACIgBACIAFABIADABIABAAIABgBIABABIABAAIACAAIAAgBIABABIABAAIACgBIACAAIABAAIACAAIAEABQAIACADAGQACADAAAHQAAAEgEAFIgEADIgFACIgDABQgLACgOAAIgBAAQgDAAgBAFIgCAFIgBAEIgBAGIgCAEIgDALIgCAGQgDAJgHAAIgGAAgAk4AoQgEgDAAgGIABgDIACgEIAEgJIADgKIACgFIABgDIABgFIAAgCIAAgBIgMgDIgBAAIgCAAQgCgBgDgEIgDgFIgCgHIABgFIAEgHIAFgBIADgBIAGAAIABgBIADgBIADAAIAFAAIACgBIABgDIAAgCIgBgBIACgDIACgDIAAgEQACgCAEAAIADAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAAAIAAABIAAACIgBACIABAEIABADIgBACIgBACIAFABIADABIABAAIABgBIABABIABAAIACAAIAAgBIAAABIABAAIADgBIADAAIABAAIABAAIAEABQAIACAEAGQABADAAAHQAAAEgEAFIgEADIgFACIgEABQgLACgOAAIgBAAQgCAAgBAFIgBAFIgCAEIgBAGIgCAEIgDALIgBAGQgEAJgHAAIgGAAgAHQAjQgCgDgCgHIgBgIIgCgHIgBgHIAAgDIgBgFIgBgCIgBgDIABgDIAAgCIAAgEQACgGAFAAIAEAAIAFACIACAEIgBACIACACIAAACIAAABIABABIABAGIADAFIABAGQAEAQAAAGQAAALgJAAQgGAAgEgEgAB8AjQgCgDgCgHIgBgIIgBgHIgBgHIgBgDIgBgFIgBgCIgBgDIABgDIAAgCIAAgEQACgGAFAAIAFAAIADACIADAEIgBACIACACIAAACIAAABIACABIAAAGIADAFIAAAGQAFAQAAAGQAAALgIAAQgIAAgDgEgAgsAjQgCgDgCgHIgBgIIgBgHIgBgHIgBgDIAAgFIgCgCIgBgDIABgDIAAgCIAAgEQACgGAFAAIAFAAIADACIADAEIgBACIACACIAAACIABABIABABIAAAGIADAFIAAAGQAFAQAAAGQAAALgIAAQgIAAgDgEgAmAAjQgCgDgCgHIgBgIIgCgHIAAgHIgBgDIAAgFIgBgCIgBgDIAAgDIABgCIAAgEQABgGAFAAIAFAAIADACIADAEIAAACIABACIAAACIABABIABABIAAAGIACAFIABAGQAFAQAAAGQAAALgIAAQgIAAgDgEgAEyAKQgDgBgDgDIgFgEIgJgGIgFgGIgCgDIAAgBIAAgCIAAgBIABgBIAAgCIAAgBIAAgCIAAgCIgBgDIgBgCIABgBIAHgCIADAAIAGgCIADgBIAEAEQAHADAGAGIAEAEIAGAHIACAFQABAHgEADIgGAFQgDACgEAAIgFAAgAjKAKQgCgBgEgDIgEgEIgKgGIgFgGIgCgDIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgCIAAgDIgBgCIABgBIAHgCIADAAIAGgCIADgBIAFAEQAFADAHAGIAEAEIAGAHIACAFQABAHgEADIgGAFQgDACgEAAIgFAAg");
	this.shape.setTransform(48.7,-145.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993300").s().p("Ag+BBQgDgBAAgDIgBgIIgFABIgFAAIgFADIgIAAIgGAAIgCAAIgDgBIgEAAIgEgEIgEgFQgDgCgBgDIAAgDIAAgBIAAgBIABgDQAAgHABgCIADgDIADgEQAHgHAFgDIAGgBIAEgDIAEgBIAIgCQAEgBAAgBIABgHQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgCgBIgCAAIgCAAIgCABIgGAAIgHgBQgTgEgFgIQgDgDAAgGIAAgFIAJgLIAKgFIACAAIADAAIACgBIADAAIAFABIADABIAFABIAHAEQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIABgFIABgDQAAgGACgBQACgCAEAAQAGAAACAEIADAKIABACIAAABIgBABIABABIABABQAAAAAAAAQAAAAABAAQAAAAABAAQABABABAAIAMABIAEgBIAEAAIAHABIAFACIAGAAIAFAEIABAEQADAEAAAIQAAADgEAEQgEAJgJAAIgBgBIgBgBIgDAAIgBAAIgBAAIgCAAIgBAAIgGAAIgDgBIgDAAIgCAAIgDABIgBgBIgCAAIgDAAIgCAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIgBAFQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADAAIABAAIACAAIAIABIAHACIADgBIABgEQAAgDAGAAQADABAAAEIgCAHIAAAAIAEADQAFADAEAFIADAHIADAGIAAAEIAAACIABADIgBAGIgDAFIAAAFQgHAHgFAAIgHgBQgDgBAAgEIAAgEQAHgIAFgDIABgEIABgCIABgBIgCgEIgDgEIgHgHIgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABIgJAJIgEADIgFACIgEAEIgCADIgCAEIAAAGIAAADIABACQAAAEgEACIgDABQgEAAgCgBgAhMAMIgKAFIgEACIgFAEIgDAEQgDAFAAAEIABACIADADIAEABIADgBIADAAIAFAAIAKgEQAEgBAAgGIgBgGIAAgGIAAgCIAAgCIABgBIAAgCIgBAAIgHABgAgzALIAAAIIAAAHQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQACAAAEgDIAFgFIAEgDQAAgDgIgCIgGgBIgCABgAEXBBIgHgEQgEgEAAgCIgBgDIgBgBIgBgCIABgCIAAgBIgBAAIABgBIgBgBIABAAIABgCIABgBIgBgBIABgBIgBgBIADgBIAAAAIABAAIABABIAAAAIABgBIABABIABgBIABAAIAAABIABAAIAAAAIABAAIAAAAIABgBIAAABIABAAIADADIAFACIADACIACAEIAAAEIAAABIgCAFIgDADQgDADgDAAIgDAAgABpA+IgFgCQgDgCAAgDIgBgCQAAgEAEgEIAEgCIABABIACAAIAAAAIABgBIADABIACAAIACAAIACAAIACABIACAAIADAAIACABIABAAIABgBIABAAIACAAIAIgFIADgDIAEgJQADgGAAgDIgDgEIgFgGQgHgEgOABIgCgBIgCAAIgHABIgGABIgIABIgFABIgEAAQgDAAgFADIgIAFIgDAAIgGgCQgEgCgBgCQgCgCAAgHQAAgCACgEIADgDIAOgDIAFgDQAJgCAJAAIACABIACAAIACgBIADAAIAFAAIACAAIACAAIAFAAIAEAAIAFABIAEABIAEAAIAEADIALAFIADADIAGADIACAFIACADQACAGAAAIIgCAGIgCAFIgDAEIgDAFIgFACIgDAFQgGADgGACIgEABIgEADQgLADgEAAIgBAAIgBAAIgCAAIgEAAgAjjA+IgBgBIgCAAIgDABQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAAAIgHgGQgEgDgCgFIgBgEIgBgGIAAgCIABgEQABgIACgDIAEgDIAFgEIAGgDIACAAIACAAIAEgBIAEgBIAGABIAGAAQAAAAAAgBQABAAAAAAQAAgBAAgBQAAgBAAgBIAAgCIgBgBIAAgFQAAgCgDgBIgGgBIgFgBIgGAAIgCAAIgDAAIgCAAIgBAAIgBABIAAgBIgHAAQgEAAgDgDIgGgFQgDgEAAgDIAAAAIABgFIACgEIAIgCIAGgCIAIAAIAKAAIAKAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIgBgCIgCgEIgCgHIgBgIIACgCIACAAQAGAAACACIAAACIADAHIACAIQACAHACAAIAEABIAEAAIAFAAIADAAIACAAIAGABQAEABAEAGIACADIAAAGQAAAEgCADQgFAFgJAAIgEgBIgIgBQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABIAAACIAAABIgBABIACAGIACAFIAJAFIAIAIIAHAIIACAEQAAAIgHgBQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgDgHIgFgFIgFgEIgBAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAIgBADIgBAIIgDAHIgEAEIgCAEIgEACQgEADgEACIgCABIgDABIgCAAIgBgBIgEABgAjmAdQAAAHACACIACABIAFAAIAEAAIAFgDIACgEQADgFAAgCIgBgCIAAgCIABgBIAAgBQAAgBgIgBQgPAAAAAMgAkXA8QgEgBgEgDQgDgDgBgEIAAgEIgEgTIABgCIAAgDIgBgDIgBgCIAAgKIAAgDIAAgDIAAAAIgBgDIAAgFIABgCIAAgDIAAgCIAAgCIABgDIAAgFQAAgHACgJIACgEIADgGQADgDAGAAIADABIACACIACAEIgBADIAAACIABAFIABAEIAAAFIABADIABAEIAAAEIAAAEIAAAFIABASIACAGIAAAHIACAGIACAFIAAAIIABACIAAADQAAAFgFAEQgEAEgFAAIgEAAgAEUAdIgEgDIgDgDIgBgEIgBgHIAAgCIABgBIgCgEIgDgJIAAgCIABgCIgBgFIAAgGIAAgMIAAgDIABgDIAAgCIgBgCQAAgFACgEIAEgFQAGgHALAAQADAAAEACQAEADABACIAAACQAAADgDAEIgCAEIAAADIgBAEIgBABIABACIAAACIAAACIAAABIAAABIAAABIAAAFIAAAEIgBAGIAAAIIgBADIgBAIIAAACIAAABQAAAFgCAEQgDAGgDABIgDABIgCAAgAilgiIgEgDIgDgEIgCgEIABgGIACgEQADgGAJAAIABAAIAEACIADAEQABABAAAHQAAAGgBACQgEAFgGAAIgEAAgAi8gmIgEgDIgBgCIgDgEIABgBIgBgBQgDgEAAgFIABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQADgDAIAAQAEAAACADIACAGIACAFIAAADIAAADIgCABIgBACIgBABIgBABIgEABIgCABIgCAAgAgwgxIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(52.2,-145.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(18));

	// レイヤー 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#993300").ss(3,1,1).p("AHjBdQgjAdgzAaQh4A+ifARQgEAAgjA5QgiA5gFAAQgOABgFg2QgFg3gQAAQjoAAilhVQgzgagjgdQhOhCAAhQQAAh3CkhUQClhUDoAAQDoAAClBUQClBUAAB3QAABQhPBCg");
	this.shape_2.setTransform(49.4,-137.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVEgQgFg3gQAAQjnAAilhVQg0gagjgdIPHAAQgkAdgzAaQh4A+ifARQgEAAgiA5QgjA5gFAAIAAAAQgOAAgFg1gAHkBdgAnjBdQhOhCAAhQQAAh3ClhUQClhUDnAAQDoAAClBUQClBUAAB3QAABQhOBCg");
	this.shape_3.setTransform(49.4,-137.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(22));

	// レイヤー 5
	this.instance = new lib.手();
	this.instance.setTransform(-60,3.6,0.997,0.997,0,-34.8,145.2,38.1,30);

	this.instance_1 = new lib.手();
	this.instance_1.setTransform(61.9,8.2,0.996,0.996,33.1,0,0,38.2,32.9);

	this.instance_2 = new lib.顔();
	this.instance_2.setTransform(-0.4,-28.4,1,1,0,0,0,0,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-60.3,y:-5.4},0).wait(1).to({regX:8.6,regY:5.9,scaleX:1,scaleY:1,skewX:-49.1,skewY:130.9,x:-59.1,y:-43.4},0).wait(1).to({skewX:-63.3,skewY:116.7,x:-68.5,y:-42.5},0).wait(1).to({skewX:-77.5,skewY:102.5,x:-77.4,y:-39.3},0).wait(1).to({skewX:-91.8,skewY:88.2,x:-85.2,y:-34.1},0).wait(14));

	// レイヤー 4
	this.instance_3 = new lib.手();
	this.instance_3.setTransform(61.7,-0.8,0.996,0.996,33.1,0,0,38.2,32.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(1).to({regX:8.6,regY:5.9,scaleX:1,scaleY:1,rotation:46.3,x:60.8,y:-40.8},0).wait(1).to({rotation:59.5,x:69.9,y:-40.1},0).wait(1).to({rotation:72.8,x:78.7,y:-37.3},0).wait(1).to({rotation:86,x:86.5,y:-32.6},0).wait(14));

	// レイヤー 7
	this.instance_4 = new lib.顔();
	this.instance_4.setTransform(-0.6,-37.4,1,1,0,0,0,0,1.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1).to({regX:1,regY:3.4,x:0.3,y:-39.2},0).wait(1).to({x:0.1,y:-43.2},0).wait(1).to({x:0,y:-47.2},0).wait(1).to({x:-0.1,y:-51.2},0).wait(14));

	// レイヤー 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#993300").ss(5,1,1).p("Ag+A0QBjgVAkgVQA0gSgIhiQg7gJgaAQQgbAQgjAnQgPAvgRAxgAiKAwQBCAMAKgIQAHAdAiARQAhARAzgGQAzgFAZAA");
	this.shape_4.setTransform(105,59);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(22));

	// レイヤー 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#993300").ss(5,1,1).p("AF5vzQDUBOCtCsQBiBjBEBvQCVD2AAExQAAG+k7E8QgjAjglAfQklD5mNAAQmMAAklj5QglgfgjgjQk7k8AAm+QAAm9E7k8QE8k7G9AAQDKAACvBBg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCCCC").s().p("AqxM7QgkgfgkgiQk7k8AAm+QAAm9E7k8QE8k7G9AAQDKAACvBBQDUBOCtCsQBiBjBEBwQCVD1AAExQAAG+k7E8QgkAigkAfQkmD6mMAAQmLAAkmj6g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},4).wait(18));

	// レイヤー 3
	this.instance_5 = new lib.耳();
	this.instance_5.setTransform(71.8,-62.9);

	this.instance_6 = new lib.耳();
	this.instance_6.setTransform(-71,-66.4,1,1,0,0,180);

	this.instance_7 = new lib.シンボル1();
	this.instance_7.setTransform(0.4,-65.7,1,1,0,0,0,94.4,24.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).wait(1).to({y:-61.7},0).wait(1).to({y:-57.7},0).wait(1).to({y:-53.7},0).wait(1).to({y:-49.7},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.2,-172.8,231.7,283.1);


// stage content:



(lib.ton = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.とん３();
	this.instance.setTransform(163.4,160.1,1,1,0,0,0,5.6,-31.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(207.5,178.5,231.7,283.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;