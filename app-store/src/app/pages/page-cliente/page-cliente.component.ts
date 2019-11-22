import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente-service/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'page-cliente',
  templateUrl: './page-cliente.component.html',
  styleUrls: ['./page-cliente.component.css']
})

export class PageClienteComponent implements OnInit {
  public Cliente: Cliente;
  public Mensagem: String;
  constructor(
    private ClienteService : ClienteService
  ) { 
    this.Cliente = new Cliente();
  }

  ngOnInit() {  
  }

  public CarregarCliente() {  
  }

  public Salvar() {   
    if(this.Cliente.Senha == this.Cliente.ConfirmarSenha) 
      this.Cadastrar(); //console.log(this.Cliente);
      else
     this.Mensagem = "senhas diferentes";
  }

  public Cadastrar() {    
    this.ClienteService.Inserir(this.Cliente).subscribe(
      cliente => this.Mensagem ="Usuário salvo",
      erro => console.log(erro)
    )
  }

  private Alterar() {
  }

}
