
// RefugeeForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaSearch, FaBriefcase, FaUserTie, FaBuilding, FaMapMarkerAlt, FaClock, FaEdit  } from 'react-icons/fa';

const RefugeeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;
  
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    age: '',
    status: 'Ativo',
    phone: '',
    email: '',
    education: '',
    skills: '',
    notes: ''
  });
  
  const [loading, setLoading] = useState(isEditing);
  const [formErrors, setFormErrors] = useState({});

  // Simular carregamento de dados para edição
  useEffect(() => {
    if (isEditing) {
      // Simular chamada à API
      setTimeout(() => {
        const mockData = {
          id: id,
          name: 'Ahmed Mohamed',
          country: 'Síria',
          age: 32,
          status: 'Ativo',
          phone: '(11) 98765-4321',
          email: 'ahmed@example.com',
          education: 'Ensino Superior Completo',
          skills: 'Engenharia, Construção Civil, Idiomas',
          notes: 'Buscando oportunidades na área de construção'
        };
        setFormData(mockData);
        setLoading(false);
      }, 800);
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpar erro ao alterar
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Nome é obrigatório';
    if (!formData.country) errors.country = 'País de origem é obrigatório';
    if (!formData.age || formData.age < 1) errors.age = 'Idade inválida';
    if (!formData.phone.trim()) errors.phone = 'Telefone é obrigatório';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simular envio para API
      console.log('Dados enviados:', formData);
      
      // Mensagem de sucesso e redirecionamento
      alert(`Refugiado ${isEditing ? 'atualizado' : 'cadastrado'} com sucesso!`);
      navigate('/refugees');
    }
  };

  if (loading) {
    return (
      <div className="admin-card">
        <div className="loading">
          <i className="fas fa-spinner fa-spin"></i> Carregando dados...
        </div>
      </div>
    );
  }

  return (
    <div className="admin-card">
      <div className="card-header">
        <h2>{isEditing ? 'Editar Refugiado' : 'Cadastrar Novo Refugiado'}</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nome Completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={formErrors.name ? 'error' : ''}
            />
            {formErrors.name && <div className="error-message">{formErrors.name}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="country">País de Origem *</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={formErrors.country ? 'error' : ''}
            >
              <option value="">Selecione um país</option>
              <option value="Síria">Síria</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Ucrânia">Ucrânia</option>
              <option value="Afeganistão">Afeganistão</option>
              <option value="Colômbia">Colômbia</option>
              <option value="Angola">Angola</option>
              <option value="Haiti">Haiti</option>
              <option value="Outro">Outro</option>
            </select>
            {formErrors.country && <div className="error-message">{formErrors.country}</div>}
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="age">Idade *</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="1"
              className={formErrors.age ? 'error' : ''}
            />
            {formErrors.age && <div className="error-message">{formErrors.age}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
              <option value="Em processo">Em processo</option>
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Telefone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className={formErrors.phone ? 'error' : ''}
            />
            {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@exemplo.com"
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="education">Formação Acadêmica</label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Ex: Ensino Médio Completo, Graduação em Engenharia..."
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="skills">Habilidades e Competências</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Ex: Construção Civil, Informática, Idiomas..."
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="notes">Observações</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            placeholder="Informações adicionais sobre o refugiado..."
          ></textarea>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {isEditing ? 'Atualizar Refugiado' : 'Cadastrar Refugiado'}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={() => navigate('/refugees')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RefugeeForm;