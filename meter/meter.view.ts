namespace $.$$ {
	export class $mol_meter extends $.$mol_meter {
		
		@ $mol_mem
		rect() {
			const node = this.dom_node()
			const win = this.$.$mol_dom_context
			
			if( node !== $mol_dom_context.document.body ) {
				$mol_state_time.now()
				
				try {
					const { left , top , right , bottom , width , height } = node.getBoundingClientRect()
					return { left , top , right , bottom , width , height , zoom : win.devicePixelRatio || 1 }
				} catch( error ) {
					// IE11
				}
			}

			const size = $mol_window.size()
			return {
				zoom : win.devicePixelRatio || 1 ,
				left : 0 ,
				top : 0 ,
				right : size.width ,
				bottom : size.height ,
				width : size.width ,
				height : size.height ,
			}
		}
		
		@ $mol_mem
		top() {
			return this.rect().top
		}
		
		@ $mol_mem
		bottom() {
			return this.rect().bottom
		}
		
		@ $mol_mem
		left() {
			return this.rect().left
		}
		
		@ $mol_mem
		right() {
			return this.rect().right
		}
		
		@ $mol_mem
		width() {
			return this.rect().width
		}
		
		@ $mol_mem
		height() {
			return this.rect().height
		}
		
		@ $mol_mem
		zoom() {
			return this.rect().zoom
		}
		
	}
}
