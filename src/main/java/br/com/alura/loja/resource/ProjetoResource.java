package br.com.alura.loja.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.alura.loja.dao.ProjetoDAO;

@Path("projetos")
public class ProjetoResource {

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getProjeto (@PathParam("id") long id) {
		return new ProjetoDAO().busca(id).toJSON();
	}
	
}
