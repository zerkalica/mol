namespace $ { export class $mol_message extends $mol_view {

	/// moment $mol_time_moment
	@ $mol_mem
	moment() {
		return (( obj )=>{
			return obj
		})( new this.$.$mol_time_moment )
	}

	/// sub / 
	/// 	<= Info - 
	/// 	<= Avatar_link - 
	/// 	<= Text -
	sub() {
		return [].concat( this.Info() , this.Avatar_link() , this.Text() )
	}

	/// Info $mol_row sub / 
	/// 	<= Name - 
	/// 	<= Moment -
	@ $mol_mem
	Info() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Name() , this.Moment() )
			return obj
		})( new this.$.$mol_row )
	}

	/// Name $mol_view sub / <= name -
	@ $mol_mem
	Name() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.name() )
			return obj
		})( new this.$.$mol_view )
	}

	/// name \
	name() {
		return " "
	}

	/// Moment $mol_view sub / <= moment_string -
	@ $mol_mem
	Moment() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.moment_string() )
			return obj
		})( new this.$.$mol_view )
	}

	/// moment_string \
	moment_string() {
		return ""
	}

	/// Avatar_link $mol_link 
	/// 	uri <= avatar_link - 
	/// 	sub / <= Avatar -
	@ $mol_mem
	Avatar_link() {
		return (( obj )=>{
			obj.uri = () => this.avatar_link()
			obj.sub = () => [].concat( this.Avatar() )
			return obj
		})( new this.$.$mol_link )
	}

	/// avatar_link \
	avatar_link() {
		return ""
	}

	/// Avatar $mol_image 
	/// 	title \
	/// 	uri <= avatar -
	@ $mol_mem
	Avatar() {
		return (( obj )=>{
			obj.title = () => ""
			obj.uri = () => this.avatar()
			return obj
		})( new this.$.$mol_image )
	}

	/// avatar \
	avatar() {
		return ""
	}

	/// Text $mol_text text <= text -
	@ $mol_mem
	Text() {
		return (( obj )=>{
			obj.text = () => this.text()
			return obj
		})( new this.$.$mol_text )
	}

	/// text \
	text() {
		return ""
	}

} }

