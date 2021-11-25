/*
O que são os principios do SOLID?
São 5 principios da programação que foram reunidos para nos ajudar a manter um codigo limpo,
flexivel e faciil de ser mantido.
Geralmente relacionados com a programação orientada a objetos, mas podem ser aplicados
a programação em geral.

S -> Single responsibility principle(Pricipio da responsabilidade unica) - uma classe deve
ter apenas um motivo para mudar (evite conjunções aditivas: e, bem como, tambem...).
Este principio está intimamente ligado com outro conhecido como Separation of concerns

O -> Open/closed principle(Principio Aberto fechado) - módulos, classes, objetos e operações devem
estar abertos para extensão, mas fechadas para modificações.

L -> Liskov substitution principle(Principio da substituição de Liskov) - Se !o(x) é uma propriedade
demonstravel dos objetos x de tipo T. Então !o(y) deve ser verdadeiro para objetos y de tipo S onde
S é um subtipo de T.(Subtipos precisam ser substituiveis por seus tipos de base).

I -> Interface segregation principle(Principio da segregação de interfaces) - os clientes não devem
ser forçados a depender de interfaces que não utilizam.

D ->  Dependency inversion principle(Principio da inversão de dependencia) - módulos de alto nivel
não devem ser dependentes do módulos de baixo nivel; ambos devem depender de abstrações. Detalhes
devem depender das abstrações, não o inverso
*/
