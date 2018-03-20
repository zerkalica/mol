namespace $ { export class $mol_app_habhub_demo extends $mol_demo_large {

	/// title @ \Articles from GitHub
	title() {
		return $mol_locale.text( "$mol_app_habhub_demo_title" )
	}

	/// sub / <= App -
	sub() {
		return [].concat( this.App() )
	}

	/// App $mol_app_habhub
	@ $mol_mem
	App() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_app_habhub )
	}

} }

