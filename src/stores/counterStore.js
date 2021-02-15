
import { observable } from 'mobx'

class CounterStore {
    @observable count = 0;
    plus = () => {
        this.count = this.count + 1
    }

    minus = () => {
        this.count = this.count - 1;
    }
}

const counter = new CounterStore()

export default counter
