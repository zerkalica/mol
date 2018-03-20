namespace $ { export class $mol_app_life_map extends $mol_plot_pane {

	/// gap 0
	gap() {
		return 0
	}

	/// pan?val / 
	/// 	0 
	/// 	0
	@ $mol_mem
	pan( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : [].concat( 0 , 0 )
	}

	/// zoom?val 16
	@ $mol_mem
	zoom( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 16
	}

	/// scale / 
	/// 	<= zoom - 
	/// 	<= zoom -
	scale() {
		return [].concat( this.zoom() , this.zoom() )
	}

	/// shift <= pan -
	shift() {
		return this.pan()
	}

	/// graphs / <= Points -
	graphs() {
		return [].concat( this.Points() )
	}

	/// Points $mol_plot_dot 
	/// 	threshold 0 
	/// 	diameter <= zoom - 
	/// 	points_raw <= points -
	@ $mol_mem
	Points() {
		return (( obj )=>{
			obj.threshold = () => 0
			obj.diameter = () => this.zoom()
			obj.points_raw = () => this.points()
			return obj
		})( new this.$.$mol_plot_dot )
	}

	/// points /
	points() {
		return [] as any[]
	}

	/// plugins / <= Touch -
	plugins() {
		return [].concat( this.Touch() )
	}

	/// Touch $mol_touch 
	/// 	zoom?val <=> zoom?val - 
	/// 	pan?val <=> pan?val -
	@ $mol_mem
	Touch() {
		return (( obj )=>{
			obj.zoom = ( val? : any ) => this.zoom( val )
			obj.pan = ( val? : any ) => this.pan( val )
			return obj
		})( new this.$.$mol_touch )
	}

	/// snapshot \
	snapshot() {
		return ""
	}

	/// snapshot_current \
	snapshot_current() {
		return ""
	}

	/// speed 0
	speed() {
		return 0
	}

	/// population 0
	population() {
		return 0
	}

	/// event * 
	/// 	^ 
	/// 	mousedown?event <=> draw_start?event - 
	/// 	mouseup?event <=> draw_end?event -
	event() {
		return ({
			...super.event() ,
			"mousedown" :  ( event? : any )=>  this.draw_start( event ) ,
			"mouseup" :  ( event? : any )=>  this.draw_end( event ) ,
		})
	}

	/// draw_start?event null
	@ $mol_mem
	draw_start( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : null as any
	}

	/// draw_end?event null
	@ $mol_mem
	draw_end( event? : any , force? : $mol_atom_force ) {
		return ( event !== void 0 ) ? event : null as any
	}

} }

