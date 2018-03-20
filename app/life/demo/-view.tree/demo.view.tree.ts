namespace $ { export class $mol_app_life_demo extends $mol_demo_large {

	/// title @ \Conway's Game of Life
	title() {
		return $mol_locale.text( "$mol_app_life_demo_title" )
	}

	/// sub / <= App -
	sub() {
		return [].concat( this.App() )
	}

	/// App $mol_app_life
	@ $mol_mem
	App() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_app_life )
	}

} }

