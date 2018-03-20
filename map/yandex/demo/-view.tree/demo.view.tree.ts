namespace $ { export class $mol_map_yandex_demo extends $mol_demo_large {

	/// title @ \Simple Yandex Maps wrapper
	title() {
		return $mol_locale.text( "$mol_map_yandex_demo_title" )
	}

	/// sub / <= Map -
	sub() {
		return [].concat( this.Map() )
	}

	/// Map $mol_map_yandex 
	/// 	center?val <=> center?val - 
	/// 	zoom?val <=> zoom?val - 
	/// 	objects / <= Place -
	@ $mol_mem
	Map() {
		return (( obj )=>{
			obj.center = ( val? : any ) => this.center( val )
			obj.zoom = ( val? : any ) => this.zoom( val )
			obj.objects = () => [].concat( this.Place() )
			return obj
		})( new this.$.$mol_map_yandex )
	}

	/// center?val / 
	/// 	59.9 
	/// 	30.3
	@ $mol_mem
	center( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : [].concat( 59.9 , 30.3 )
	}

	/// zoom?val 10
	@ $mol_mem
	zoom( val? : any , force? : $mol_atom_force ) {
		return ( val !== void 0 ) ? val : 10
	}

	/// Place $mol_map_yandex_mark 
	/// 	pos <= place_pos - 
	/// 	title <= place_title - 
	/// 	content <= place_content -
	@ $mol_mem
	Place() {
		return (( obj )=>{
			obj.pos = () => this.place_pos()
			obj.title = () => this.place_title()
			obj.content = () => this.place_content()
			return obj
		})( new this.$.$mol_map_yandex_mark )
	}

	/// place_pos / 
	/// 	59.9 
	/// 	30.3
	place_pos() {
		return [].concat( 59.9 , 30.3 )
	}

	/// place_title \Saint-Petersburg
	place_title() {
		return "Saint-Petersburg"
	}

	/// place_content \It is Russia's second-largest city after Moscow
	place_content() {
		return "It is Russia's second-largest city after Moscow"
	}

} }

