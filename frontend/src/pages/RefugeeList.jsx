// RefugeeList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBriefcase, FaUserCircle, FaBuilding, FaMapMarkerAlt, FaClock, FaEdit } from 'react-icons/fa';



const RefugeeList = () => {
  const [refugees, setRefugees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  // // Carregar refugiados da API
  // useEffect(() => {
  //   const fetchRefugees = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await RefugeeService.getAll();
  //       setRefugees(data);
  //       setError('');
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
    
  //   fetchRefugees();
  // }, []);

    useEffect(() => {
    const mockData = [
      { id: 1, name: 'Ahmed Mohamed', country: 'Síria', birthDate: '13/03/1978', status: 'Ativo', registered: '2023-05-15' },
      { id: 2, name: 'Maria Silva', country: 'Venezuela', birthDate: '17/04/1991', status: 'Ativo', registered: '2023-06-22' },
      { id: 3, name: 'John Doe', country: 'Ucrânia', birthDate: '03/09/1982', status: 'Inativo', registered: '2023-04-10' },
      { id: 4, name: 'Fatima Alves', country: 'Angola', birthDate: '22/07/2001', status: 'Ativo', registered: '2023-07-05' },
      { id: 5, name: 'Carlos Rodriguez', country: 'Colômbia', birthDate: '17/03/1994', status: 'Ativo', registered: '2023-03-18' },
    ];
    
    setTimeout(() => {
      setRefugees(mockData);
      setLoading(false);
    }, 800);
  }, []);

  const filteredRefugees = refugees.filter(refugee => 
    refugee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    refugee.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteRefugee = (id) => {
    if(window.confirm('Tem certeza que deseja excluir este refugiado?')) {
      setRefugees(refugees.filter(r => r.id !== id));
    }
  };

  // // Função para deletar um refugiado
  // const deleteRefugee = async (id) => {
  //   if(window.confirm('Tem certeza que deseja excluir este refugiado?')) {
  //     try {
  //       await RefugeeService.delete(id);
  //       // Atualizar a lista após exclusão
  //       setRefugees(refugees.filter(r => r.id !== id));
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   }
  // };

  return (
    <div className="admin-card">
      <div className="card-header">
        <h2>Refugiados Cadastrados</h2>
        <div className="header-actions">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input 
              type="text" 
              placeholder="Buscar refugiados..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Link to="/refugees/new" className="btn btn-primary">
            <i className="fas fa-plus"></i>
            <span className="btn-text">Novo Refugiado</span>
          </Link>
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">
          <i className="fas fa-spinner fa-spin"></i> Carregando dados...
        </div>
      ) : (
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>País de Origem</th>
                <th>Data de Nascimento</th>
                <th>Status</th>
                <th>Data de Cadastro</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredRefugees.length > 0 ? (
                filteredRefugees.map(refugee => (
                  <tr key={refugee.id}>
                    <td>
                      <div className="user-info">
                        <img src={`https://ui-avatars.com/api/?name=${refugee.name}&background=1d4e89&color=fff`} alt={refugee.name} />
                        <span>{refugee.name}</span>
                      </div>
                    </td>
                    <td>{refugee.country}</td>
                    <td>{refugee.birthDate}</td>
                    <td>
                      <span className={`status-badge ${refugee.status.toLowerCase()}`}>
                        {refugee.status}
                      </span>
                    </td>
                    <td>{refugee.registered}</td>
                    <td className="actions">
                      <Link to={`/refugees/edit/${refugee.id}`} className="btn btn-edit">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="18" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
                        </svg>

                      </Link>
                      <button 
                        className="btn btn-delete"
                        onClick={() => deleteRefugee(refugee.id)}
                      >
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="18" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-results">
                    <i className="fas fa-exclamation-circle"></i> Nenhum refugiado encontrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RefugeeList;