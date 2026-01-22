export interface Blog {
  id: string;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
  isUserCreated: boolean;
}

/**
 * DTO should ONLY contain fields user actually sends
 * Never derive it from Blog directly
 */
export interface CreateBlogDTO {
  title: string;
  category: string[];
  description: string;
  content: string;
  coverImage: string;
}
