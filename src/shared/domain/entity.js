export class Entity {
	#id

	constructor(id = null) {
		this.#id = id
	}

	equals(other) {
		if (!other || !(other instanceof Entity)) return false
		if (this === other) return true

		return this.#id !== null && this.#id === other.id
	}

	get id() {
		return this.#id
	}

	set id(id) {
		if (this.#id) {
			throw new Error('Cannot change ID of an entity')
		}
		this.#id = id
	}
}
