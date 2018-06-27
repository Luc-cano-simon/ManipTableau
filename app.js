var div = $("#liste");
tableau = ["Nico", "Marc","Helder"];
// tableau.push("Toto");
// div.append(tableau);


$("#add").append("<input id='text'>")
$("#add").append("<button id='ajouter'>Ajouter</button>");
$("#add").append("<button id='annuler'>Retirer</button>");

function afficherListe () 
{

	for (i=0 ; i < tableau.length ; i++ )
	{
		div.append("<li>"+tableau[i]+"</li>")
	}

}

afficherListe();

function ajouterElement ()

{
	
	div.empty();
	tableau.push($("#text").val())
	for (i=0 ; i < tableau.length ; i++ )
	{
		div.append("<li>"+tableau[i]+"</li>");
	}

}

function annulerElement()
{
	div.empty();
	tableau.pop();
	for (i=0 ; i < tableau.length ; i++ )
	{
		div.append("<li>"+tableau[i]+"</li>");
	}
}

$("#ajouter").click(function(){ajouterElement()});
$("#annuler").click(function(){annulerElement()});




















