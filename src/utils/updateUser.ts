/* La raison de créer un type séparée en dehors de DTO et la raison qu'on veut pas reutiliser le DTO est que parfois les utilisateurs puissent envoyer les propriétés additionnels qui tu as besoin dans le serveur
mais que tu n'as pas besoin dans la base de données. Par exemple, tu veux que les utilisateurs puissent envoyer les propriétés additionnels comme le nom et le prénom mais que tu n'as pas besoin de les stocker dans la base de données. Dans ce cas, tu peux créer un type séparée en dehors de DTO et tu peux utiliser ce type dans le controller.
Par exemple dans le formulaire password et confirm password, on a pas à envoyer les deux sur la base de données via le service, par exemple, on peut comparer le password avec un middleware ou validation pipe*/
// Une bonne idée de separer le type et le DTO qui sert la validation pour envoyer nos données dansla base de données
export class UpdateUserParams {
  username: string;
  password: string;
  // confirmPassword: string; // Interessent, j'aimerais apprendre a utiliser pour avoir un deux types differents entre type params et dto.
}
