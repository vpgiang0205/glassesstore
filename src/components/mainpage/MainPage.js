import React, { Component } from 'react';
import glassesData from './../../dataGlasses.json';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGlass: null, // tạo state để lưu trữ kính được chọn
    };
    this.glassesData = glassesData;
  }

  handleGlassSelection = (glass) => {
    this.setState({ selectedGlass: glass }); // Cập nhật state khi người dùng chọn kính
  }

  renderUI() {
    const { selectedGlass } = this.state;

    return (
      <div className='container mx-50'>
        <h1>Glass App Online</h1>
        <div className='row'>
          <div className='col-6'>
            <img src="./glassesImage/model.jpg" alt="" />
          </div>
          <div className='col-6'>
            <img style={{ position: 'relative', }} src="./glassesImage/model.jpg" alt="" />
            {selectedGlass && (
              <div className="" style={{ position: 'absolute', top: '9.5rem', left: '10rem', width: '16rem', margin: 'auto' }}>

                <img src={selectedGlass.url} className="card-img-top" alt={selectedGlass.name} />

                <div className="card-body" style={{ position: 'absolute', bottom: '-20rem', width: '16rem', margin: 'auto' }}>
                  <h5 className="card-title">{selectedGlass.name}</h5>
                  <p className="card-text">{selectedGlass.desc}</p>
                </div>

              </div>
            )}
          </div>
          <div className='row container m-auto bg-white w-100 mt-3 p-5'>
            {this.glassesData.map((glass) => ( // Render cái list mắt kính ra
              <div
                className="card p-2 m-1 bg-transparent"
                key={glass.id}
                style={{ width: '10rem', cursor: 'pointer' }}
                onClick={() => this.handleGlassSelection(glass)} // Gọi hàm xử lý khi người dùng chọn kính
              >
                <img src={glass.url} className="card-img-top" alt={glass.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <>{this.renderUI()}</>;
  }
}
