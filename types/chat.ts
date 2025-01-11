// Core interface for AI conversation roles
// Defines the structure each role must follow
export interface Role {
  id: string; // Unique identifier for the role
  name: string; // Display name
  description: string; // Brief explanation of the role's perspective
  category: RoleCategory; // Groups similar roles together
}

// Available categories for organizing roles
// Using union type for type-safety and autocompletion
export type RoleCategory =
  | "academic"
  | "professional"
  | "philosophical"
  | "scientific";

// Initial set of available roles for AI conversations
// Each role represents a unique perspective for discussing topics
export const roles: Role[] = [
  {
    id: "philosopher",
    name: "Philosopher",
    description:
      "A deep thinker who analyzes topics through ethical, logical, and existential lenses",
    category: "philosophical",
  },
  {
    id: "scientist",
    name: "Scientist",
    description:
      "An evidence-based researcher who approaches topics through empirical analysis",
    category: "scientific",
  },
  {
    id: "lawyer",
    name: "Lawyer",
    description:
      "A legal expert who examines topics through legal and regulatory frameworks",
    category: "professional",
  },
];

// Utility function to find a role by its ID
// Returns undefined if no role matches the given ID
export function getRoleById(id: string): Role | undefined {
  return roles.find((role) => role.id === id);
}
