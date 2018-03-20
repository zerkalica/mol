namespace $ { export class $mol_text_demo extends $mol_demo_large {

	/// title @ \Markdow visualization example
	title() {
		return $mol_locale.text( "$mol_text_demo_title" )
	}

	/// sub / <= Scroll -
	sub() {
		return [].concat( this.Scroll() )
	}

	/// Scroll $mol_scroll sub / <= Text -
	@ $mol_mem
	Scroll() {
		return (( obj )=>{
			obj.sub = () => [].concat( this.Text() )
			return obj
		})( new this.$.$mol_scroll )
	}

	/// Text $mol_text text \
	/// 	\# [Benchmarks](app/bench)
	/// 	\## Benchmark 1
	/// 	\### Benchmark 1.1
	/// 	\#### Benchmark 1.1.1
	/// 	\##### Benchmark 1.1.1.1
	/// 	\
	/// 	\* [$mol_app_bench_list](app/bench/list) - Frameworks comparison ([online](http://eigenmethod.github.io/mol/app/bench/#becnh=list#sort=fill#))
	/// 	\* [ToDoMVC benchmark](https://github.com/eigenmethod/todomvc/tree/master/benchmark) ([online](http://eigenmethod.github.io/mol/app/bench/#bench=http:%2F%2Feigenmethod.github.io%2Ftodomvc%2Fbenchmark%2F#sample=angular2%7Eangularjs%7Eknockoutjs%7Emol%7Epolymer%7Ereact-alt%7Evanillajs%7Evue#sort=fill#))
	/// 	\* [WebPageTest - Loading progress of ToDOMVC applications on some frameworks](https://www.webpagetest.org/video/compare.php?tests=161217_V8_6RFK%2C161217_G9_6RFM%2C161217_YZ_6RFN%2C161217_DM_6RFP%2C161217_2B_6RFQ%2C161217_RJ_6RFR%2C161217_2R_6RFS%2C161217_H5_6RFT%2C161217_CW_6RFV&thumbSize=150&ival=100&end=all)
	/// 	\* [Line charts comparison](app/bench/chart/rope) ([online](http://eigenmethod.github.io/mol/app/bench/#bench=chart%2Frope%2F/sort=fill/sample=hcharts~mol))
	/// 	\* [Bar charts comparison](app/bench/chart/bar) ([online](http://eigenmethod.github.io/mol/app/bench/#bench=chart%2Fbar%2F/sort=fill/sample=hcharts~mol))
	/// 	\
	/// 	\# Quick start
	/// 	\
	/// 	\**Create MAM project**
	/// 	\
	/// 	\Easy way is checkout [this preconfigured ~~PMS~~MAM repository](http://github.com/eigenmethod/mam/) and start dev server:
	/// 	\
	/// 	\```sh
	/// 	\git clone https://github.com/eigenmethod/mam.git ./mam && cd mam
	/// 	\npm start
	/// 	\```
	/// 	\
	/// 	\|           | **Column 1** | **Column 2** | **Column 3**
	/// 	\|-----------|--------------|--------------|---------
	/// 	\| **Row 1** | Cell 1x1     | Cell 2x1     | Cell 3x1
	/// 	\| **Row 2** | Cell 1x2     | Cell 2x2     | Cell 3x2
	/// 	\| **Row 3** | Cell 1x3     | Cell 2x3     | Cell 3x3
	/// 	\| **Row 4** | Cell 1x4     | Cell 2x4     | Cell 3x4
	/// 	\| **Row 5** | Cell 1x5     | Cell 2x5     | Cell 3x5
	/// 	\| **Row 6** | Cell 1x6     | Cell 2x6     | Cell 3x6
	/// 	\| **Row 7** | Cell 1x7     | Cell 2x7     | Cell 3x7
	/// 	\| **Row 8** | Cell 1x8     | Cell 2x8     | Cell 3x8
	/// 	\| **Row 9** | Cell 1x9     | Cell 2x9     | Cell 3x9
	/// 	\
	/// 	\Build status: [![Build Status](https://travis-ci.org/eigenmethod/mol.svg?branch=master)](https://travis-ci.org/eigenmethod/mol)
	/// 	\
	@ $mol_mem
	Text() {
		return (( obj )=>{
			obj.text = () => "# [Benchmarks](app/bench)\n## Benchmark 1\n### Benchmark 1.1\n#### Benchmark 1.1.1\n##### Benchmark 1.1.1.1\n\n* [$mol_app_bench_list](app/bench/list) - Frameworks comparison ([online](http://eigenmethod.github.io/mol/app/bench/#becnh=list#sort=fill#))\n* [ToDoMVC benchmark](https://github.com/eigenmethod/todomvc/tree/master/benchmark) ([online](http://eigenmethod.github.io/mol/app/bench/#bench=http:%2F%2Feigenmethod.github.io%2Ftodomvc%2Fbenchmark%2F#sample=angular2%7Eangularjs%7Eknockoutjs%7Emol%7Epolymer%7Ereact-alt%7Evanillajs%7Evue#sort=fill#))\n* [WebPageTest - Loading progress of ToDOMVC applications on some frameworks](https://www.webpagetest.org/video/compare.php?tests=161217_V8_6RFK%2C161217_G9_6RFM%2C161217_YZ_6RFN%2C161217_DM_6RFP%2C161217_2B_6RFQ%2C161217_RJ_6RFR%2C161217_2R_6RFS%2C161217_H5_6RFT%2C161217_CW_6RFV&thumbSize=150&ival=100&end=all)\n* [Line charts comparison](app/bench/chart/rope) ([online](http://eigenmethod.github.io/mol/app/bench/#bench=chart%2Frope%2F/sort=fill/sample=hcharts~mol))\n* [Bar charts comparison](app/bench/chart/bar) ([online](http://eigenmethod.github.io/mol/app/bench/#bench=chart%2Fbar%2F/sort=fill/sample=hcharts~mol))\n\n# Quick start\n\n**Create MAM project**\n\nEasy way is checkout [this preconfigured ~~PMS~~MAM repository](http://github.com/eigenmethod/mam/) and start dev server:\n\n```sh\ngit clone https://github.com/eigenmethod/mam.git ./mam && cd mam\nnpm start\n```\n\n|           | **Column 1** | **Column 2** | **Column 3**\n|-----------|--------------|--------------|---------\n| **Row 1** | Cell 1x1     | Cell 2x1     | Cell 3x1\n| **Row 2** | Cell 1x2     | Cell 2x2     | Cell 3x2\n| **Row 3** | Cell 1x3     | Cell 2x3     | Cell 3x3\n| **Row 4** | Cell 1x4     | Cell 2x4     | Cell 3x4\n| **Row 5** | Cell 1x5     | Cell 2x5     | Cell 3x5\n| **Row 6** | Cell 1x6     | Cell 2x6     | Cell 3x6\n| **Row 7** | Cell 1x7     | Cell 2x7     | Cell 3x7\n| **Row 8** | Cell 1x8     | Cell 2x8     | Cell 3x8\n| **Row 9** | Cell 1x9     | Cell 2x9     | Cell 3x9\n\nBuild status: [![Build Status](https://travis-ci.org/eigenmethod/mol.svg?branch=master)](https://travis-ci.org/eigenmethod/mol)\n"
			return obj
		})( new this.$.$mol_text )
	}

} }

