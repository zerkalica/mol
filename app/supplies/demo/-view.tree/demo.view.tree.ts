namespace $ { export class $mol_app_supplies_demo extends $mol_demo_large {

	/// title @ \Supplies approving business process
	title() {
		return $mol_locale.text( "$mol_app_supplies_demo_title" )
	}

	/// sub / <= App -
	sub() {
		return [].concat( this.App() )
	}

	/// App $mol_app_supplies entered true
	@ $mol_mem
	App() {
		return (( obj )=>{
			obj.entered = () => true
			return obj
		})( new this.$.$mol_app_supplies )
	}

} }

