namespace $ { export class $mol_plot_graph extends $mol_svg_group {

	/// series *
	series() {
		return ({
		})
	}

	/// points <= points_scaled -
	points() {
		return this.points_scaled()
	}

	/// points_scaled <= points_raw -
	points_scaled() {
		return this.points_raw()
	}

	/// points_raw /
	points_raw() {
		return [] as any[]
	}

	/// threshold 4
	threshold() {
		return 4
	}

	/// shift / 
	/// 	0 
	/// 	0
	shift() {
		return [].concat( 0 , 0 )
	}

	/// scale / 
	/// 	1 
	/// 	1
	scale() {
		return [].concat( 1 , 1 )
	}

	/// dimensions_expanded <= dimensions -
	dimensions_expanded() {
		return this.dimensions()
	}

	/// dimensions / 
	/// 	/ 
	/// 	/
	dimensions() {
		return [].concat( [] as any[] , [] as any[] )
	}

	/// size_real / 
	/// 	0 
	/// 	0
	size_real() {
		return [].concat( 0 , 0 )
	}

	/// hue NaN
	hue() {
		return NaN
	}

	/// attr * 
	/// 	^ 
	/// 	mol_plot_graph_type <= type -
	attr() {
		return ({
			...super.attr() ,
			"mol_plot_graph_type" :  this.type() ,
		})
	}

	/// type \solid
	type() {
		return "solid"
	}

	/// style * 
	/// 	^ 
	/// 	color <= color -
	style() {
		return ({
			...super.style() ,
			"color" :  this.color() ,
		})
	}

	/// color \
	color() {
		return ""
	}

	/// Sample null
	Sample() {
		return null as any
	}

	/// front /
	front() {
		return [] as any[]
	}

	/// back /
	back() {
		return [] as any[]
	}

} }

namespace $ { export class $mol_plot_graph_sample extends $mol_view {

	/// attr * 
	/// 	^ 
	/// 	mol_plot_graph_type <= type -
	attr() {
		return ({
			...super.attr() ,
			"mol_plot_graph_type" :  this.type() ,
		})
	}

	/// type \solid
	type() {
		return "solid"
	}

	/// style * 
	/// 	^ 
	/// 	color <= color -
	style() {
		return ({
			...super.style() ,
			"color" :  this.color() ,
		})
	}

	/// color \black
	color() {
		return "black"
	}

} }

