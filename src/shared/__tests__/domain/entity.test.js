import { randomUUID } from "node:crypto"
import { describe, expect, it } from "@jest/globals"
import { Entity } from "../../domain/entity"

describe("Domain Entity", () => {
	describe("Constructor", () => {
		it("should create an entity with null id", () => {
			const entity = new Entity()
			expect(entity.id).toBeNull()
		})

		it("should create a entity with the provided id", () => {
			const id = randomUUID().toString()
			const entity = new Entity(id)

			expect(entity.id).toBe(id)
		})
	})

	describe("Equals", () => {
		it('should return true when comparing the same entity instance', () => {
			const entity = new Entity('123');
			expect(entity.equals(entity)).toBe(true);
		});

		it('should return true when comparing two entities with the same id', () => {
			const entity1 = new Entity('123');
			const entity2 = new Entity('123');
			expect(entity1.equals(entity2)).toBe(true);
		});

		it('should return false when comparing with null', () => {
			const entity = new Entity('123');
			expect(entity.equals(null)).toBe(false);
		});

		it('should return false when comparing with undefined', () => {
			const entity = new Entity('123');
			expect(entity.equals(undefined)).toBe(false);
		});

		it('should return false when comparing with non-entity object', () => {
			const entity = new Entity('123');
			const nonEntity = { id: '123' };
			expect(entity.equals(nonEntity)).toBe(false);
		});

		it('should return false when comparing entities with different ids', () => {
			const entity1 = new Entity('123');
			const entity2 = new Entity('456');
			expect(entity1.equals(entity2)).toBe(false);
		});

		it('should return false when comparing entities with null ids', () => {
			const entity1 = new Entity();
			const entity2 = new Entity();
			expect(entity1.equals(entity2)).toBe(false);
		});
	})

	describe('setId', () => {
		it('should set id when current id is null', () => {
				const entity = new Entity();
				const newId = randomUUID().toString();
				entity.id = newId;
				expect(entity.id).toBe(newId);
		});

		it('should throw error when trying to change existing id', () => {
				const entity = new Entity('123');

				expect(() => {
						entity.id = '456';
				}).toThrow('Cannot change ID of an entity');
		});
});
})
