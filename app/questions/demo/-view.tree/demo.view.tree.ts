namespace $ { export class $mol_app_questions_demo extends $mol_demo_large {

	/// title @ \New questions from StackOverflow
	title() {
		return $mol_locale.text( "$mol_app_questions_demo_title" )
	}

	/// sub / <= App -
	sub() {
		return [].concat( this.App() )
	}

	/// App $mol_app_questions
	@ $mol_mem
	App() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_app_questions )
	}

} }

